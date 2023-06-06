export interface Task{
    title: string;
    id: string
  }

  export interface Column{
    title: string,
    id: string,
    tasks: Task[]
  }

  export type Dashboard = {
    columns: Column[]
  }