const express = require('express')
const {
  createPost,
  getPosts,
  postsByUser,
  postById,
  isPoster,
  deletePost,
  updatePost
} = require('../controllers/post')
const { userById } = require('../controllers/user')
const { requireSignin } = require('../controllers/auth')
const { createPostValidator } = require('../validator')

const router = express.Router()

router.get('/', requireSignin, getPosts)
router.post(
  '/post/new/:userId',
  requireSignin,
  createPost,
  createPostValidator
)
router.get('/posts/by/:userId', requireSignin, postsByUser)
router.put(
  '/post/:postId',
  requireSignin,
  isPoster,
  updatePost
)
router.delete('/post/:postId', requireSignin, isPoster, deletePost)

router.param('userId', userById)

router.param('postId', postById)

module.exports = router
