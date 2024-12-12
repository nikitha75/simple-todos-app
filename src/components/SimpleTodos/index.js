import {useState} from 'react'
import TodoItem from '../TodoItem'

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

  const handleClickDelete = todoId => {
    const newTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(newTodos)
  }

  return (
    <>
      <h1>Simple Todos</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            handleClickDelete={handleClickDelete}
          />
        ))}
      </ul>
    </>
  )
}

export default SimpleTodos

