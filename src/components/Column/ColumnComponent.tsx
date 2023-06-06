import {Droppable} from "react-beautiful-dnd"
import styled from "styled-components"
import "../scroll.css"
import TaskComponent from "../Task/TaskComponent"
import { Task, Column } from "../../shared/interfaces/Task"

const Container = styled.div`
    background-color: #f4f5f7;
    border-radius: 2.5px;
    width:400px;
    height:775px;
    overflow-y: scroll;
    -ms-overflow-style:none;
    scrollbar-width:none;
    border: 1px solid gray;
`

const Title = styled.h3`
    padding:8px;
    background-color: pink;
    text-align: center;
`

const TaskList = styled.div<{isDragging: boolean}>`
    padding: 3px;
    transition: background-color 0.2s easel
    background-color: #f4f5f7;
    flex-grow:1;
    min-height: 100px;
`


export const  ColumnComponent: React.FC<{column: Column}>=(props)=>{
    return (
        <Container className = "column">
            <Title>
                {props.column.title}
            </Title>
            <Droppable droppableId={props.column.id}>
            {(provided, snapshot) => (
            <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDragging={snapshot.isDraggingOver}
            >
                {
                props.column.tasks.map((task, index) => (
                <TaskComponent key={index} index={index} task={task} />
                ))}
                {provided.placeholder}
            </TaskList>
            )}
      </Droppable>
        </Container>
    )
}