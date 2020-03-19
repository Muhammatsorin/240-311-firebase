import React from "react"
import styled from 'styled-components'

const TaskList = (props) => {

    const { task, updateTask, deleteTask } = props
    const { id, name } = task
    return (
        <StyledWrapper>
            <li>
                <div className="id">
                    {id}
                </div>
                <div className="name">
                    {name}
                </div>
                <div className="button">
                    <button  style={{backgroundColor:"lightcoral"}} onClick={() => deleteTask(id)}>Delete</button>
                    <button  style={{backgroundColor:"lightgreen"}} onClick={() => updateTask(id)}>Update</button>
                </div>
            </li>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    li {
        position: relative;
        width: 180px;
        height: 200px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 6px 0 rgb(0,0,0,0.50);
        
    }

    .id {
        position: absolute;
        right: 4px;
        top: 2px;
    }

    .name {
        background: white;
        font-size: 30px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
    }

    .button {
        display: flex;
        flex-direction: row;

        button {
            width: 100px;
            height: 30px;
            display: flex;
            justify-content: center;
        }
    }
`

export default TaskList