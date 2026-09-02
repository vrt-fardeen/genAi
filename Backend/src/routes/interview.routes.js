const express = require('express');
const authMiddleware = require("../middlewares/auth.middleware.js")


const interviewRouter = express.Router();

/**
 * @route POST /api/interview/
 * @description generate new interview report of the basis of user self description, resume pdf and job description
 * @access Private
 */
interviewRouter.post('/', authMiddleware.authUser)



module.exports = interviewRouter