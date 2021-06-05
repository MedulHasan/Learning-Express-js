const router = require('express').Router()
const { getAllPost, getSinglePost, createNewPost, updatePost, deletePost } = require('./postController')

router.get('/', getAllPost)

router.get('/:postid', getSinglePost)

router.post('/', createNewPost)

router.put('/:postid', updatePost)

router.delete('/:postid', deletePost)

module.exports = router