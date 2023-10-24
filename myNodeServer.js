const express = require('express')
/* const cors = require('cors') */
const bodyParser = require('body-parser')
const app = express()
const port = 8005
/* const fs = require('fs') */

/* app.use(cors()) */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* app.get('/', (req, res) => {
  fs.readFile('db.json', (err, data) => {
    if (err) {
      res.send('An error occurred')
      return res.status(500)
    }
    const dataObj = JSON.parse(data)
    res.json(dataObj)
  })
}) */

let todos = [
  {
    todoName: "Take out the trash",
    todoCategory: "Chores",
    todoID: 1
  },
  {
    todoName: "Go for a walk",
    todoCategory: "Exercise",
    todoID: 2
  },
  {
    todoName: "Finish the todo app",
    todoCategory: "Work",
    todoID: 3
  }
]


// grabs all todos in the array
app.get('/todos', (req, res) => {
    res.send(todos)
  })


  // adds a new todo object to the array
  app.post('/todo', (req, res) => {

    console.log('new todo: ', req.body.todoName)

    let newTodoID = todos.length === 0 ? 1 : todos.at(-1).todoID + 1

    todos.push({
      todoName: req.body.todoName,
      todoCategory: req.body.todoCategory,
      todoID: newTodoID
    })

    res.send(todos)
  })


  // updates a todo objects name in the array
  app.put('/todos/:id', (req, res) => {

      let requestedTodoID = req.params.id
      let newTodoName = req.body.todoName

      let todoToUpdate = todos.find(todo => todo.todoID == requestedTodoID)
      todoToUpdate.todoName = newTodoName

      console.log('old todo with new name: ', todoToUpdate)
      res.send(todos)
  })


  // deletes a todo object from the array
  app.delete('/todos/:id', (req, res) => {

    let requestedTodoID = req.params.id

    todos = todos.filter(todo => todo.todoID != requestedTodoID)

    res.send(todos)
  })


  // gets all todos for a category
  app.get('/todos/:categories', (req, res) => {

    let requestedTodoCategory = req.params.categories

    let filteredTodos = todos.filter(todo => todo.todoCategory == requestedTodoCategory)

    res.send(filteredTodos)
    console.log(requestedTodoCategory)
/*     res.send("I am a get request for the categories") */
  })


  // gets just the categories
  app.get('/categories', (req, res) => {
    let categories = todos.map(todo => todo.todoCategory)

    let uniqueCategoryNames = new Set(categories)
    let uniqueCategories = [...uniqueCategoryNames]

    res.send(uniqueCategories)
  })


  // updates a todo objects category in the array
  app.put('/categories/:category', (req, res) => {
    let requestedTodoCategory = req.params.category
    let newCategoryName = req.body.todoCategory

    // let categories = todos.map(todo => todo.todoCategory)
    // let filteredCategories = categories.filter(category => category.todoCategory == newCategoryName)
    todos.forEach(todo => {
      if (todo.todoCategory == requestedTodoCategory) {
        todo.todoCategory = newCategoryName
        } 
    })
    console.log("all categories I requested: ", todos)
    res.send(todos)
})  


// deletes a todo category from the object
app.delete('/categories/:category', (req, res) => {

  let requestedTodoCategory = req.params.category

  todos = todos.map(todo => {
    if (todo.todoCategory == requestedTodoCategory) {
      todo.todoCategory = "empty"
    }
    return todo
  })

  res.send(todos)
})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})



