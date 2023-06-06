import { FC, useState } from "react";
import {DragDropContext, DropResult} from "react-beautiful-dnd"
import { useDashboardContext } from "../../context/dashboard-context";
import { ColumnComponent } from "../Column/ColumnComponent";

const KanbanDashboard:FC =() => {
    console.log("KanbanDashboard render")
    // const defaultDashboard = useContext(DashboardContext).dashboard;
    const {dashboard, moveTask} = useDashboardContext()
    console.log(dashboard)
    // const moveTask = useContext(DashboardContext).moveTask;
 
    const handleDragEnd = (result:DropResult): void=>{

        const { destination, source, draggableId } = result;
        if(destination == null) return;
        if (source.droppableId == destination.droppableId) return;

        moveTask(draggableId, destination.droppableId)
    }
    return (
        <DragDropContext  onDragEnd={handleDragEnd}>
            <h2 style = {{textAlign:"center"}}> PROGRESS BOARD</h2>

            <div style = {{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                flexDirection: "row"}}>

            {
                dashboard.columns?.map((col,index)=>(
                    <ColumnComponent key = {index} column={col}/>
                ))
            }
                      
            </div>
        </DragDropContext>
        )
}
export default KanbanDashboard