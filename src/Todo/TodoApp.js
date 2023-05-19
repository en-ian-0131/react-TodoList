import React, { useState } from 'react'
import '../styles/Todo.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: '學習', complete: false, editing: true },
    { id: 2, text: '讀書', complete: false, editing: false },
  ])
  const type = ['All', 'Active', 'Complete']
  const [filterType, setFilterType] = useState('')

  //功能 pure function
  const createFunction = (value) => {
    const newTodo = {
      id: Number(new Date()),
      text: value,
      complete: false,
      editing: false,
    }
    return newTodo
  }
  const completeTodo = (id) => {
    return todos.map((v, i) => {
      if (v.id === id) {
        return { ...v, complete: !v.complete }
      } else {
        return { ...v }
      }
    })
  }
  const deleteTodo = (id) => {
    return todos.filter((v, i) => {
      return v.id !== id
    })
  }
  const addTodo = (todos, value) => {
    return [createFunction(value), ...todos]
  }
  const filterTodo = (filterType) => {
    return todos.filter((v, i) => {
      switch (filterType) {
        case 'Complete':
          return v.complete
        case 'Active':
          return !v.complete
        default:
          return v
      }
    })
  }
  const editingTodo = (id) => {
    return todos.map((v, i) => {
      if (v.id === id) {
        return { ...v, editing: !v.editing }
      } else {
        return { ...v, editing: false }
      }
    })
  }
  const updateTodo = (id, newTodo) => {
    return todos.map((v, i) => {
      if (v.id === id) {
        return { ...v, text: newTodo, editing: false }
      } else {
        return { ...v }
      }
    })
  }

  //簡化傳入過多的props
  const handleAddTodo = (value) => {
    setTodos(addTodo(todos, value))
  }
  const handleComplete = (id) => {
    setTodos(completeTodo(id))
  }
  const handleDelete = (id) => {
    setTodos(deleteTodo(id))
  }
  const handleEditing = (id) => {
    setTodos(editingTodo(id))
  }
  const handleUpdate = (id, newTodo) => {
    setTodos(updateTodo(id, newTodo))
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoInput handleAddTodo={handleAddTodo} todos={todos} />
      <hr />
      <TodoList
        todos={filterTodo(filterType)}
        setTodos={setTodos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        handleEditing={handleEditing}
        handleUpdate={handleUpdate}
      />
      <hr />
      {type.map((v, i) => {
        return (
          <button
            key={i}
            className={v === filterType ? 'filterAfter' : 'filterBefore'}
            onClick={() => {
              setFilterType(v)
            }}
          >
            {v}
          </button>
        )
      })}
    </>
  )
}

export default TodoApp
