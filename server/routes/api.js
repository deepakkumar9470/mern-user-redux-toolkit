const express  = require('express')

const router = express.Router()

const {addUser,getUsers,getUserById,editUser,deleteUser}  = require('../controllers/userController')


// @ /api/user/add

router.post('/add', addUser)

// @ /api/user
router.get('/', getUsers)

// @ /api/user/123
router.get('/:id', getUserById)


// @ /api/user/123
router.put('/:id', editUser)

// @ /api/user/123
router.delete('/:id', deleteUser)

module.exports = router