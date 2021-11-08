const express = require('express');
const router = express.Router();
const { createUser, userLogin, getUserProfile } = require('../controller/user_controller');
const { createBlog, updateBlog, getAllBlog, deleteBlog } = require('../controller/blog_controller')

const authorizationRoutes = require('../middlewares/auth')


router.post('/create_user', createUser);
router.post('/login', userLogin);
router.get('/get_user_profile', authorizationRoutes, getUserProfile);

router.post('/createBlog', authorizationRoutes, createBlog);
router.post('/updateBlog', authorizationRoutes, updateBlog);
router.get('/getAllBlog', authorizationRoutes, getAllBlog);
router.post('/deleteBlog', authorizationRoutes, deleteBlog);
module.exports = router;