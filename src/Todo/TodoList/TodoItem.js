import EditTodo from './EditTodo'
function TodoItem({
  id,
  text,
  complete,
  editing,
  handleComplete,
  handleDelete,
  handleEditing,
  handleUpdate,
}) {
  return (
    <>
      <li key={id} className={complete ? 'complete' : 'active'}>
        <input
          type="checkbox"
          checked={complete}
          onChange={() => {
            handleComplete(id)
          }}
        />

        {editing ? (
          <>
            <EditTodo text={text} handleUpdate={handleUpdate} id={id} />
          </>
        ) : (
          <>
            {text}
            <button
              className="editButton"
              onClick={() => {
                handleEditing(id)
              }}
            >
              編輯
            </button>
          </>
        )}

        <i
          className="fa-solid fa-xmark todoIcon"
          onClick={() => {
            handleDelete(id)
          }}
        ></i>
      </li>
    </>
  )
}

export default TodoItem
