import React from 'react';
import { useState , useEffect } from "react"
import styled from "styled-components"
import { firestore } from './index'

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "MUHAMMATSORIN HAWAE"
    },
    {
      id: 2,
      name: "FARUM OBIAS"
    }
  ])

  useEffect( () => {
    retriveData()
  },[])

  const retriveData = () => {
    firestore.collection("Tasks").onSnapshot( (snapshot) => {
      let myTask = snapshot.docs.map((data) => {
        const {id , name} = data.data()
        console.log(id , name)
        return {id , name}
      })
      setTasks(myTask)
    })
  }

  const renderTask = () => {
    if (tasks && tasks.length) {
      return (
        tasks.map((tasks, index) => {
          return (
            <li key={index}>
              {tasks.id} : {tasks.name}
            </li>
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
        <ul>
          {renderTask()}
        </ul>
      </div>

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .title {
    text-align: center
  }

  .todo-list {
    margin-left: 20px;
  }

  h1 {
    color: red;
  }

`
export default App;
