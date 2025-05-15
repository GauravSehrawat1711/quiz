import { AppDataSource } from '../config/data-source';
import { QuizSession } from '../entities/QuizSession';
import { Quiz } from '../entities/Quiz';
import { Question } from '../entities/Question';
import { QuizAttempt } from '../entities/QuizAttempts';
import { Result } from '../entities/Result';

const sessionRepo = AppDataSource.getRepository(QuizSession);
const quizRepo = AppDataSource.getRepository(Quiz);
const questionRepo = AppDataSource.getRepository(Question);
const attemptRepo = AppDataSource.getRepository(QuizAttempt);
const resultRepo = AppDataSource.getRepository(Result);

export const submitQuiz = async (
  quizId: number,
  userId: number,
  answers: { questionId: number; selectedIndex: number }[]
) => {

  const quiz = await quizRepo.findOneBy({ id: quizId });
  if (!quiz) return { error: 'Quiz not found' };


  const session = await sessionRepo.findOne({
    where: { quizId, userId },
    order: { startedAt: 'DESC' }, 
  });
  if (!session) return { error: 'Quiz session not found. Start quiz first.' };

  // Validate time limit
  const now = new Date();
  const deadline = new Date(session.startedAt.getTime() + (quiz.time_limit || 0) * 1000);
  if (now > deadline) return { error: 'Time limit exceeded' };

  // Fetch all quiz questions (to check correct answers)
  const questions = await questionRepo.find({ where: { quiz: { id: quizId } } });
  const questionMap = new Map(questions.map(q => [q.id, q]));

  let correctAnswers = 0;

  // Clear previous attempts for session (if any)
  await attemptRepo.delete({ sessionId: session.id });

  // Save attempts & calculate score
  for (const answer of answers) {
    const question = questionMap.get(answer.questionId);
    if (!question) continue;

    const isCorrect = question.correct_option_index === answer.selectedIndex;
    if (isCorrect) correctAnswers++;

    const attempt = attemptRepo.create({
      sessionId: session.id,
      questionId: question.id,
      selectedIndex: answer.selectedIndex,
      isCorrect,
    });
    await attemptRepo.save(attempt);
  }

  // Calculate score
  const totalQuestions = questions.length;
  const score = correctAnswers; 

  // Save final result
  const result = resultRepo.create({
    user: { id: userId },
    quiz: { id: quizId },
    score,
    correctAnswers,
    totalQuestions,
  });
  await resultRepo.save(result);

  // Prepare feedback array
  const feedback = answers.map(answer => {
    const question = questionMap.get(answer.questionId);
    return {
      questionId: answer.questionId,
      selectedIndex: answer.selectedIndex,
      correctIndex: question?.correct_option_index ?? null,
      correct: question?.correct_option_index === answer.selectedIndex,
    };
  });

  return {
    score,
    correctAnswers,
    totalQuestions,
    feedback,
  };
};
