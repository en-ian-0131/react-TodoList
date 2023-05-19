import TodoItem from './TodoItem'

function TodoList({
  todos,
  handleComplete,
  handleDelete,
  handleEditing,
  handleUpdate,
}) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          const { id, text, complete, editing } = v
          return (
            <TodoItem
              key={id}
              id={id}
              text={text}
              complete={complete}
              editing={editing}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              handleEditing={handleEditing}
              handleUpdate={handleUpdate}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
