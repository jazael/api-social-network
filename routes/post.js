const express = require('express')
const { createPost, getPosts } = require('../controllers/post')
const { userById } = require('../controllers/user')
const { requireSignin } = require('../controllers/auth')
const { createPostValidator } = require('../validator')

const router = express.Router()

router.get('/', requireSignin, getPosts)

router.post('/post', requireSignin, createPostValidator, createPost)

router.param('userId', userById)

module.exports = router
