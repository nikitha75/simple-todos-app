// Write your code here

const TodoItem = ({id, title, handleClickDelete}) => (
  <li>
    <p>{title}</p>
    <button type="button" onClick={() => handleClickDelete(id)}>
      Delete
    </button>
  </li>
)

export default TodoItem
