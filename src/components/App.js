import React from 'react'
import List from '../containers/List'
import ToDoInput from '../containers/ToDoInput'

const App = () => {
  return (
    <div>
      <h1>To Do List</h1>
      <ToDoInput />
      <List />
    </div>
  )
}

export default App
