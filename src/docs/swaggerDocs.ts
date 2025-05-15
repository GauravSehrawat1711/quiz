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
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                  type: string
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
 * /questions/{id}:
 *   put:
 *     summary: Update an existing question
 *     description: This endpoint allows an admin to update an existing question.
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Question
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the question to update
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
 *       200:
 *         description: Question updated successfully
 *       400:
 *         description: Bad request
 *       403:
 *         description: Forbidden (admin only)
 */

/**
 * @swagger
 * /questions/{id}:
 *   delete:
 *     summary: Delete a question
 *     description: This endpoint allows an admin to delete a question.
  *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Question
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the question to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Question deleted successfully
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

export default {};
