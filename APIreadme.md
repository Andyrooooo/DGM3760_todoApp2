## Todo App API Server

#### GET TODOS - To get the todos, you will use URL '/todos' with a GET request

#### POST TODO and POST CATEGORIES - These will BOTH work at the same time. The URL will be '/todo', and set your first key to "todoName" and then input your value. Below there you will also enter in your second key "todoCategory" and input that value as well for a GET request. If you do not enter either key the new object will be generated without it.

#### PUT TODO (update) - To update an existing todo you use the URL '/todos/`the todos id`'. Once you do that you will use the key "todoName" and enter the value you want to change with a PUT request.

#### DELETE TODO - To delete a todo you will use the url '/todos/`the todos id`' with a DELETE request.

#### GET ALL TODOS for a CATEGORY - to grab all todos containing a specific category you will use the url '/todos/`the todo category`' with a GET request.

#### GET CATEGORIES - To get a list of the categories, you will enter the url '/categories' with a GET request.

#### PUT CATEGORIES (update) - To update a category name value, you will use the url '/categories/`name of category`'. You will then use the key "todoCategory", and then enter the new value with a PUT request.

#### DELETE CATEGORIES - To delete a category, you will enter the url '/categories/`name of category`' with a DELETE request. This will remove the initial value and replace it with "empty", this will allow you to change that value later if you choose.