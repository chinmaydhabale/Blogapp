const express = require('express');
const { getAllBlogsController, createBlogController, getBlogByIdController, deleteBlogController, updateBlogController } = require('../controlers/blogcontrollers');

//router object

const router = express.Router();



//routes
//GET - all blogs
router.get('/all-blog', getAllBlogsController)

//POST - create blogs

router.post('/create-blog', createBlogController)

//PUT - update blog

router.put('update-blog/:id', updateBlogController)

//GET - single blog detail
router.get('get-blog/:id', getBlogByIdController)

//DELETE - delete blog
router.delete('delete-blog/:id', deleteBlogController)



module.exports = router

