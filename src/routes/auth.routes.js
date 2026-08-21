const { Router} = require('express')
const authController = require("../controllers/auth.controller.js")

const authRouter = Router()

/***
 * @name POST /api/auth/register
 * @description Route to register a new user.
 * @access Public
 */
authRouter.post('/register', authController.registerUserController);

/***
 * @name POST /api/auth/login
 * @description Route to login a user with email and password.
 * @access Public
 */
authRouter.post('/login', authController.loginUserController);

/**
 * @route GET /api/auth/logout
 * @description clear token from user cookie and add the token to backlist
 * @access Public
 */

authRouter.get("/logout", authController.logoutUserController);

module.exports = authRouter