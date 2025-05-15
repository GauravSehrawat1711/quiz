// src/docs/swaggerDocs.ts
/*
* @swagger
* tags:
*   name: Auth
*   description: Authentication
*/

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: This endpoint registers a new user in the system.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - role
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 example: Password123!
 *               role:
 *                 type: string
 *                 enum: [admin, user]
 *                 example: user
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in an existing user
 *     description: This endpoint allows an existing user to log in and receive a JWT token.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 */
/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: Quiz management
 */

/**
 * @swagger
 * /quizzes:
 *   post:
 *     summary: Create a new quiz
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - time_limit
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                  type: string
 *               time_limit:
 *                  type: number
 *     responses:
 *       201:
 *         description: Quiz created successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /quizzes/{id}:
 *   put:
 *     summary: Update an existing quiz
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type : string
 *               time_limit:
 *                 type : number
 *     responses:
 *       200:
 *         description: Quiz updated successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /quizzes/{id}:
 *   delete:
 *     summary: Delete a quiz
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Quiz deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /quizzes:
 *   get:
 *     summary: Get all quizzes
 *     tags: [Quiz]
  *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of quizzes
 */

/**
 * @swagger
 * /quizzes/{id}:
 *   get:
 *     summary: Get quiz by ID
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Quiz object
 *       404:
 *         description: Quiz not found
 */
/**
 * @swagger
 * tags:
 *   name: Question
 *   description: Question management
 */

/**
 * @swagger
 * /questions/{quizId}:
 *   post:
 *     summary: Add a new question to a quiz
 *     description: This endpoint allows an admin to add a new question to a quiz.
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Question
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         description: The ID of the quiz to add the question to
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - questionText
 *               - options
 *               - correctAnswer
 *             properties:
 *               questionText:
 *                 type: string
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *               correctAnswer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Question created successfully
 *       400:
 *         description: Bad request
 *       403:
 *         description: Forbidden (admin only)
 */




/**
 * @swagger
 * /questions/quiz/{quizId}:
 *   get:
 *     summary: Get all questions for a quiz
 *     description: This endpoint fetches all the questions for a specific quiz.
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Question
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         description: The ID of the quiz to fetch questions for
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of questions for the quiz
 *       400:
 *         description: Bad request
 */
/**
 * @swagger
 * tags:
 *   - name: Result
 *     description: Endpoints related to quiz results
 */

/**
 * @swagger
 * /results:
 *   post:
 *     summary: Create a new quiz result
 *     description: Submit a user's result after completing a quiz.
 *     tags: [Result]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quizId
 *               - userId
 *               - score
 *               - correctAnswers
 *               - totalQuestions
 *             properties:
 *               quizId:
 *                 type: integer
 *                 example: 1
 *               userId:
 *                 type: integer
 *                 example: 5
 *               score:
 *                 type: integer
 *                 example: 8
 *               correctAnswers:
 *                 type: integer
 *                 example: 4
 *               totalQuestions:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       201:
 *         description: Result created successfully
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /results/user/{userId}:
 *   get:
 *     summary: Get all results for a user
 *     description: Fetch all quiz results associated with a user ID.
 *     tags: [Result]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: List of results
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: Quiz participation (start, submit)
 */

/**
 * @swagger
 * /quizzes/{id}/start:
 *   get:
 *     summary: Start a quiz
 *     description: Creates a quiz session for the user and returns quiz questions without correct answers.
 *     tags: [Quiz]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the quiz to start
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Quiz started successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     quiz:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: number
 *                         title:
 *                           type: string
 *                         time_limit:
 *                           type: number
 *                           description: Time limit in seconds
 *                     questions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: number
 *                           question_text:
 *                             type: string
 *                           options:
 *                             type: array
 *                             items:
 *                               type: string
 *                     sessionId:
 *                       type: number
 *       404:
 *         description: Quiz not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: Quiz participation (start, submit)
 */

/**
 * @swagger
 * /quizzes/{id}/submit:
 *   post:
 *     summary: Submit answers for a quiz
 *     description: Submit quiz answers, receive score and detailed feedback.
 *     tags: [Quiz]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Quiz ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: User's answers to quiz questions
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - answers
 *             properties:
 *               answers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - questionId
 *                     - selectedIndex
 *                   properties:
 *                     questionId:
 *                       type: integer
 *                       example: 101
 *                     selectedIndex:
 *                       type: integer
 *                       description: Index of selected option
 *                       example: 2
 *     responses:
 *       200:
 *         description: Quiz submitted successfully with results
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     score:
 *                       type: integer
 *                       example: 7
 *                     correctAnswers:
 *                       type: integer
 *                       example: 7
 *                     totalQuestions:
 *                       type: integer
 *                       example: 10
 *                     feedback:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           questionId:
 *                             type: integer
 *                             example: 101
 *                           selectedIndex:
 *                             type: integer
 *                             example: 2
 *                           correctIndex:
 *                             type: integer
 *                             example: 2
 *                           correct:
 *                             type: boolean
 *                             example: true
 *       400:
 *         description: Bad request or validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Time limit exceeded
 *       404:
 *         description: Quiz or session not found
 *       500:
 *         description: Internal server error
 */

export default {};
