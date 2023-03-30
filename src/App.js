import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Task from './components/Task'
import Footer from './components/Footer'
import './App.css'

function App() {

  const hasFetchedData = useRef(false)

  let [newTaskContent, setNewTaskContent] = useState([])
  let [showAddTask, setShowAddTask] = useState(false)

  let addTaskContent

  useEffect(() => {
    if (hasFetchedData.current === false) {
      fetchTasks();
      hasFetchedData.current = true
    } 
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8080/tasks')
    const data = await res.json()
    for (let i = 0; i < data.length; i++) {
      setNewTaskContent(newTaskContent => [...newTaskContent, <Task task={data[i]} deleteTask={() => deleteTask(data[i]._id)} />])
    }
  }

  const addTask = async (task) => {
    await fetch('http://localhost:8080/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })
    setNewTaskContent([])
    fetchTasks()
  }

  const deleteTask = async (id) => {
    if (window.confirm('Do you want to delete this task?')) {
      await fetch(`http://localhost:8080/tasks/${id}`, {
        method: 'DELETE'
      })
      setNewTaskContent([])
      fetchTasks()
    }
  }

  const clearTasks = async () => {
    if (window.confirm('Do you want to clear all tasks?')) {
      await fetch('http://localhost:8080/tasks', {
        method: 'DELETE'
      })
      setNewTaskContent([])
      fetchTasks()
    }
  }

  if (showAddTask) {
    addTaskContent = <AddTask newTask={addTask} />
  }

  return (
    <div className="App">
      <Header title={"Task Tracker"} toggleShowAddTask={() => setShowAddTask(showAddTask = !showAddTask)} showAddTask={showAddTask} />
      {addTaskContent}
      {newTaskContent}
      <Footer clearTasks={clearTasks} />
    </div>
  )
}

export default App