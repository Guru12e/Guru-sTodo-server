const toDoModels = require('../models/models')

module.exports.getToDo = async(req,res) => {
    const Todo = await toDoModels.find()
    res.send(Todo)
}
module.exports.setToDo = async(req,res) => {
    const {text} = req.body
    toDoModels.create({text})
    .then((data) => {
        console.log("data added")
        console.log(data)
        res.send(data)
    })
    .catch((err) => console.log(err))
}
module.exports.updateTodo = async(req,res) => {
    const {_id,text} = req.body
    toDoModels.findByIdAndUpdate(_id,{text})
    .then(() => res.send(200).send("Updated Successfully."))
    .catch((err) => res.send(console.log(err)))
}
module.exports.deleteTodo = async(req,res) => {
    const {_id} = req.body
    toDoModels.findByIdAndDelete(_id)
    .then(() => res.send(200).send("Updated Successfully."))
    .catch((err) => res.send(console.log(err)))
}