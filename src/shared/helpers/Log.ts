import { Dashboard } from "../interfaces/Task";

export function LogDashboard(dashboard:Dashboard){
    let log :string = "dashboard:"

    for (let i=0;i<dashboard.columns.length;i++){
        const column =dashboard.columns[i]
        log +='\n' + '-column '+ dashboard.columns[i].id;

        for(let j=0;j<dashboard.columns[i].tasks.length;j++){

            const task = dashboard.columns[i].tasks[j]
            log += '\n' +'-- task ' + dashboard.columns[i].tasks[j].id; 
        }
    }
            console.log(log)
}