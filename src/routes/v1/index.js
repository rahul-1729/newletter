const express = require('express');
const router = express.Router();

const {UserController}=require('../../controllers/index.js')

router.post('/signup',UserController.create)
router.get('/info/:email',UserController.getUser)
router.patch('/update/:email',UserController.update)



module.exports = router;