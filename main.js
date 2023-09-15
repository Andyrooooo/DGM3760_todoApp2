let todos = []

let displayTodos = document.querySelector(".displayTodos")
let newTodoForm = document.querySelector("#newTodoForm")
let todoInputName = document.querySelector(".todoInputName")
let todoMessages = document.querySelector(".todoMessages")

/* Todo messages */
const message = () => {
 todoMessages.innerText =
  todos.length === 0
   ? "Whooohooo there's no more todos! nice"
   : todos.length === 1
   ? `You have ${todos.length} todo`
   : `You have ${todos.length} todos left`
}
message()

/* EVENT LISTENER TO TAKE VALUES AND CREATE A NEW TODO IN THE LIST ------------ */
newTodoForm.addEventListener("submit", (e) => {
 e.preventDefault()

 let createNewTodo = () => {
  const newTodoName = todoInputName.value

  /* Makes sure the user does not put in an empty field */
  if (todoInputName.value === "") {
   alert("Please enter a name")
  } else {
   /* gives us a new ID and if there is no id's then it will assign 1 to it */
   newTodoID = todos.length === 0 ? 1 : todos[todos.length - 1].todoID + 1

   let todoListItem = document.createElement("li")
   todoListItem.classList.add("todoListItem")
   let todoInputDisplayName = document.createElement("input")
   todoInputDisplayName.classList.add("todoInputDisplayName")
   let todoNameBTNsContainer = document.createElement("div")
   todoNameBTNsContainer.classList.add("todoNameBTNsContainer")
   let todoEditNameBTN = document.createElement("button")
   todoEditNameBTN.classList.add("todoEditNameBTN")
   let todoDeleteBTN = document.createElement("button")
   todoDeleteBTN.classList.add("todoDeleteBTN")

   todoInputDisplayName.value = newTodoName
   todoEditNameBTN.innerText = "Edit Name"
   todoDeleteBTN.innerText = "Delete Todo"

   todoInputDisplayName.setAttribute("readonly", "true")
   todoListItem.appendChild(todoInputDisplayName)
   todoNameBTNsContainer.appendChild(todoEditNameBTN)
   todoNameBTNsContainer.appendChild(todoDeleteBTN)
   todoListItem.appendChild(todoNameBTNsContainer)
   displayTodos.appendChild(todoListItem)

   /* create new object for todos array */
   let todo = {
    todoName: newTodoName,
    todoID: newTodoID,
   }

   /* add new todo to array */
   todos = [...todos, todo]

   /* clear out name input */
   todoInputName.value = ""

   /* DELETES A TODO ------------------------------------------------------------------*/
   todoDeleteBTN.addEventListener("click", () => {
    let todoDeleteIndex = Array.from(displayTodos.children).indexOf(
     todoListItem
    )

    if (todoDeleteIndex !== -1) {
     todos.splice(todoDeleteIndex, 1)
     displayTodos.removeChild(todoListItem)
     console.log(todos)
    }
    message()
   })

   /* Edits a todo --------------------------------------------------------------------*/
   todoEditNameBTN.addEventListener("click", () => {
    if (todoEditNameBTN.innerText == "Edit Name") {
     todoInputDisplayName.removeAttribute("readonly")
     todoInputDisplayName.focus()
     todoEditNameBTN.innerText = "Save Name"
    } else {
     todo.todoName = todoInputDisplayName.value
     todoInputDisplayName.setAttribute("readonly", "true")
     todoEditNameBTN.innerText = "Edit Name"
    }
    console.log(todos)
   })
  }
 }
 /* Calls the event listener */
 createNewTodo()

 message()
 console.log(todos)

 /* DELETES ALL TODOS ----------------------------------------------------------------*/
 let removeAllTodos = document.querySelector(".removeAllTodos")
 removeAllTodos.addEventListener("click", () => {
  todos = []

  // removes all the children from the list
  while (displayTodos.firstChild) {
   displayTodos.removeChild(displayTodos.firstChild)
  }

  message()
  console.log(todos)
 })
})

// OLD CODE ----------------------------------------------------------------------

/* if (todos.length === 0) {
    todoMessages.innerText = "Whooohooo there's no more todos! nice"
   } else if (todos.length === 1) {
    todoMessages.innerText = `You have ${todos.length} todo left`
   } else {
    todoMessages.innerText = `You have ${todos.length} todos left`
   } */

/*   todos = [...todos] */
