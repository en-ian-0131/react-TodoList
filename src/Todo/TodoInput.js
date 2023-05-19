import { useState } from 'react'

function TodoInput({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo(inputValue)
            setInputValue('')
          }
        }}
      />
    </>
  )
}

export default TodoInput
