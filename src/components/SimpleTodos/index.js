import {useState} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

const SimpleTodos = () => {
  const [todos, setTodos] = useState(initialTodosList)
  const [title, setTitle] = useState('')
  const [editedTodo, setEditedTodo] = useState(null)
  const [newTitle, setNewTitle] = useState('')

  const handleClickDelete = todoId => {
    const newTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(newTodos)
  }

  const handleChange = event => {
    setTitle(event.target.value)
  }

  const handleAddTodo = () => {
    if (title !== '' && title !== null) {
      setTodos(prevState => [
        ...prevState,
        {
          id: Date.now(),
          title,
        },
      ])
      setTitle('')
    }
  }

  const handleEditTodo = (todoId, todoTitle) => {
    setNewTitle(todoTitle)
    setEditedTodo(prevId => (prevId === todoId ? null : todoId))
  }

  const handleChangeEditTodo = event => {
    setNewTitle(event.target.value)
  }

  const handleSaveTodo = (id, todoTitle) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, title: todoTitle} : todo,
      ),
    )
    setEditedTodo(null)
  }

  return (
    <div className="container">
      <h1 className="heading">Simple Todos</h1>
      <div className="add-todo-container">
        <div>
          <input
            type="text"
            value={title}
            onChange={handleChange}
            className="add-input"
          />
        </div>
        <div>
          <button type="button" onClick={handleAddTodo} className="btn add-btn">
            Add
          </button>
        </div>
      </div>
      <ul className="todos-container">
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              handleClickDelete={handleClickDelete}
              handleAddTodo={handleAddTodo}
              handleEditTodo={handleEditTodo}
              handleSaveTodo={handleSaveTodo}
              editedTodo={editedTodo}
              newTitle={newTitle}
              handleChangeEditTodo={handleChangeEditTodo}
            />
          ))
        ) : (
          <p>Please add a todo!</p>
        )}
      </ul>
    </div>
  )
}

export default SimpleTodos
