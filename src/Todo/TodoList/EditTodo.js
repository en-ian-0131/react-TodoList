import React, { useEffect, useState } from 'react'

function EditTodo({ text, handleUpdate, id }) {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue(text)
  }, [text])
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <button
        className="editButton"
        onClick={() => {
          handleUpdate(id, inputValue)
        }}
      >
        儲存
      </button>
    </>
  )
}

export default EditTodo
