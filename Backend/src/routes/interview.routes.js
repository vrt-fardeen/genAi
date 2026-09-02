const express = require('express');
const authMiddleware = require("../middlewares/auth.middleware.js")
const interviewController = require("../controllers/interview.controller.js")


const interviewRouter = express.Router();

/**
 * @route POST /api/interview/
 * @description generate new interview report of the basis of user self description, resume pdf and job description
 * @access Private
 */
interviewRouter.post('/', authMiddleware.authUser, interviewController.generateInterviewReportController);



module.exports = interviewRouter