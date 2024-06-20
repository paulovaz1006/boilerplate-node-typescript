/**
 * @openapi
 * /extract/{user_id}:
 *   get:
 *     tags:
 *       - Extrato
 *     description: Get transaction extract for a user
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Extract retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   transaction_id:
 *                     type: string
 *                   amount:
 *                     type: number
 *                   date:
 *                     type: string
 *                   description:
 *                     type: string
 *       400:
 *         description: Invalid user ID
 *       500:
 *         description: Internal server error
 */