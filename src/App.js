import React from 'react';
import { useState, useEffect } from "react"
import styled from "styled-components"
import { firestore } from './index'
import TaskList from './TaskList'

const App = () => {

  const [tasks, setTasks] = useState([

  ])

  const [name, setName] = useState(" ")

  useEffect(() => {
    retriveData()
  }, [])

  const retriveData = () => {
    firestore.collection("Tasks").onSnapshot((snapshot) => {
      let myTask = snapshot.docs.map((d) => {
        const { id, name } = d.data()
        console.log(id, name)
        return { id, name }
      })
      setTasks(myTask)
    })
  }

  const createTask = () => {
    let id = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].id + 1
    firestore.collection("Tasks").doc(id + "").set({ id, name })
  }

  const deleteTask = (id) => {
    firestore.collection("Tasks").doc(id + "").delete()
  }

  const updateTask = (id) => {
    firestore.collection("Tasks").doc(id + "").set({ id, name })
  }

  const renderTask = () => {
    if (tasks && tasks.length) {
      return (
        tasks.map((tasks, index) => {
          return (
            <TaskList key={index}
              task={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          )
        })
      )
    }
    else {
      return (
        <li>No Tasks</li>
      )
    }
  }

  return (
    <StyledWrapper>
      <div className="title">
        <h1>240 - 311 : LAB FIREBASE</h1>
        <h2>BY : 5935512045 MUHAMMATSORIN  HAWAE</h2>
        <p>--------------------------------------------------------------------------------</p>
      </div>
      <div className="todo-list">
        <h3>-- TODO LIST --</h3>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        <button onClick={createTask}>SUBMIT</button>
        <div className="ul-list">
          <ul>
            {renderTask()}
          </ul>
        </div>

      </div>

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .title {
    text-align: center;
  }

  .todo-list {
    margin-left: 20px;
  }

  h1 {
    color: red;
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 20px;
    padding-left: 0px;
  }
`
export default App;
