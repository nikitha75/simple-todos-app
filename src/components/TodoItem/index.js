import './index.css'

const TodoItem = ({
  id,
  title,
  handleClickDelete,
  handleEditTodo,
  handleSaveTodo,
  editedTodo,
  newTitle,
  handleChangeEditTodo,
}) => (
  <li className="todo-item">
    {editedTodo === id ? (
      <p>
        <input type="text" value={newTitle} onChange={handleChangeEditTodo} />
      </p>
    ) : (
      <p>{title}</p>
    )}
    <div className="btn-group">
      <div>
        <button
          type="button"
          className={`${editedTodo === id ? 'btn save-btn' : 'btn edit-btn'}`}
          onClick={
            editedTodo === id
              ? () => {
                  handleSaveTodo(id, newTitle)
                }
              : () => {
                  handleEditTodo(id, title)
                }
          }
        >
          {editedTodo === id ? 'Save' : 'Edit'}
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => handleClickDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  </li>
)

export default TodoItem
