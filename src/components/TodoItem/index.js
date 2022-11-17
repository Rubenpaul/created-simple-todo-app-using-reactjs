// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails, DeleteUser} = props
  const {id, title} = userDetails

  const onDelete = () => {
    DeleteUser(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
