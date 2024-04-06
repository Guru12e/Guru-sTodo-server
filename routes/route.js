const {Router} = require('express')
const { getToDo, setToDo, updateTodo, deleteTodo } = require('../controllers/toDoController')

const router = Router()

router.get('/',getToDo)
router.post('/set',setToDo)
router.post('/update',updateTodo)
router.post('/delete',deleteTodo)
module.exports = router