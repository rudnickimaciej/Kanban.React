import React, { useContext, useEffect, useState } from "react";
import GetDashboard from "../shared/services/DashboardService";
import { Dashboard } from "../shared/interfaces/Task";
import { LogDashboard } from "../shared/helpers/Log";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import axios from "axios";
interface Props {
    children: React.ReactNode;
  }
type DashboardContextProps = {
    dashboard: Dashboard;
    moveTask: (taskId:string, destinationColumnId:string) => void;
}
const defaultDashboard = GetDashboard() 

function generateModifiedDashboard(dashboard: Dashboard,taskId:string, destinationColumnId:string): Dashboard {
    let sourceColumnId:string
    let taskToMove

    for (let i=0;i<dashboard.columns.length;i++){
        for(let j=0;j<dashboard.columns[i].tasks.length;j++){
    
            const task = dashboard.columns[i].tasks[j]
    
            if(task.id == taskId){
                taskToMove = task;
                sourceColumnId = dashboard.columns[i].id
                dashboard.columns[i].tasks.splice(j,1);  
            }
        }
    }
    if(typeof taskToMove !== 'undefined')
    {
        for (let i=0;i<dashboard.columns.length;i++){
            const column = dashboard.columns[i]
            if(column.id == destinationColumnId){
                dashboard.columns[i].tasks.push(taskToMove);  
            }
        }
    }
    return dashboard
  }
 const DashboardContext = React.createContext<DashboardContextProps>({} as DashboardContextProps)

export function useDashboardContext() {
    const value =  useContext(DashboardContext);

    if (value === null) {
        throw new Error(
            `'useDashboardContext' cannot be called without a 'DashboardContextProvider'. 
              Did you forget to wrap your app with the provider?`
        );
      }
     
      return value;
  }
export const DashboardContextProvider:React.FC<Props> =({children})=> {
    
    const [connection, setConnection] = useState<HubConnection>();
    const [dashboard, setDashboard] = useState(defaultDashboard);

    async function connectToHub(){
        try{
            const connection = new HubConnectionBuilder()
            .withUrl("https://localhost:44377/dashboard")
            .configureLogging(LogLevel.Information)
            .build();
    
            connection.on("ReceiveDashboard",(dashboard)=>{
                let parsed: Dashboard = JSON.parse(dashboard);
                console.log("Dashboard update from SignalR")
                setDashboard(parsed)
            })
    
            await connection.start();
           setConnection(connection);
        }
        catch(e){
            console.log(e)
        }
    }

    console.log("DashboardContextProvider")
      useEffect(()=>{
        (async () => connectToHub())()
        fetch("https://localhost:44377/tasks")
        .then(response => response.json())
        .then(response => {
            let parsed: Dashboard = JSON.parse(JSON.stringify(response));
            setDashboard(parsed)
        })
       
        return () => {
        };
    },[])

    const sendMessage = async (dashboard:Dashboard) => {
        if(!connection)
            return;

        try {
          await connection.invoke("SendDashboard", {Columns: dashboard.columns});
        } catch (e) {
          console.log(e);
        }
      }
    

    const moveTask = (taskId:string, destinationColumnId: string) : void=>{
        LogDashboard(dashboard);
        const newDashboard = generateModifiedDashboard(dashboard, taskId, destinationColumnId)
        LogDashboard(newDashboard);
        setDashboard(newDashboard)
        sendMessage(newDashboard);
    }
    return(
        <DashboardContext.Provider value = {
            {
            dashboard,
            moveTask
            }
        }>
            {children}
        </DashboardContext.Provider>
    )
}

