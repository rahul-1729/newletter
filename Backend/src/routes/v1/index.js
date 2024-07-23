const express = require('express');
const router = express.Router();

const {UserController}=require('../../controllers/index.js')

router.post('/signup',UserController.create)
router.get('/info',UserController.getUser)
router.patch('/update',UserController.update)
router.delete('/delete',UserController.destroy)
router.post('/signin',UserController.signin)


module.exports = router;