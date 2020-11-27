require('dotenv').config()
const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('../config/default')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'The email is not correct').isEmail(),
    check('password', 'Min length of password is 6 sybmols').isLength({
      min: 6,
    }),
  ],
  async (request, response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        // means there are errors

        return response.status(400).json({
          errors: errors.array(),
          message: 'The data is not correct',
        })
      }

      const { email, password } = request.body
      // email, password - from the frontend

      const candidate = await User.findOne({ email })

      if (candidate) {
        return response.status(400).json({
          message: 'There is already user like this',
        })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, password: hashedPassword })

      await user.save()

      response.status(200).json({
        message: 'User has been created',
      })
    } catch (e) {
      response.status(500).json({ message: 'Something went wrong' })
      // 500 - server error from http
    }
  },
)

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Enter correct email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'The data is not correct',
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({
          message: 'The user is not founded',
        })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({
          message: 'The password is not correct, try again',
        })
      }

      const token = jwt.sign({ userId: user.id }, config.jwtSecret, {
        expiresIn: '1h',
      })

      res.json({ token, userId: user.id, status: 200 })
    } catch (e) {
      res.status(400).json({
        message: 'Something went wrong, try again',
      })
    }
  },
)

module.exports = router
