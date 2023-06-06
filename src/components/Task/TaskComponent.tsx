import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Task } from "../../shared/interfaces/Task";

const Container = styled.div<{isDragging: boolean}>`
  border-radius: 3px;
  box-shadow: 5px 5px 5px 2px grey;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 90px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${(props) => bgcolorChange(props)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const DeleteButton = styled.button`

`
const TextContent = styled.div``;

function bgcolorChange(props:any) {
  return props.isDragging
    ? "lightgreen"
    : props.isDraggable
    ? props.isBacklog
      ? "#F2D7D5"
      : "#DCDCDC"
    : props.isBacklog
    ? "#F2D7D5"
    : "#EAF4FC";
}

interface TaskProps
{
  task:Task;
  index:number
}
export default function TaskComponent({ task, index }:TaskProps) {

  const handleTaskDeletion = (removedId: string)=>{
    //TODO: remove task from context
  }
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
            <span>
              <small>
                {/* #{task.id} */}
                {"  "}
              </small>
            </span>
            <DeleteButton onClick={()=>handleTaskDeletion}> X </DeleteButton>
          </div>
      
          <div
            style={{ display: "flex", justifyContent: "center", padding: 2 }}
          >
           
            <TextContent>{task.title}</TextContent>
          </div>   
          {/* {provided.placeholder} */}
        </Container>
      )}
    </Draggable>
  );
}