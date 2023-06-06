import KanbanDashboard from './components/KanbanDashboard/KanbanDashboard';
import { Example } from './components/Task/Example';
import { ExampleParent } from './components/Task/ExampleParent';
import { DashboardContextProvider } from './context/dashboard-context';
import { SimpleContextProvider } from './context/simple-context';
import axios from 'axios';
function App() {

  axios.get('https://www.boredapi.com/api/activity')
  .then((response)=>{
    console.log(response.data)})
  .catch((reason)=>console.log(reason))
  
  return (
    <div className="App">
      <SimpleContextProvider>
      <DashboardContextProvider> 
        <ExampleParent/>
        <KanbanDashboard/>
      </DashboardContextProvider>
      </SimpleContextProvider>
    </div>
  );
}

export default App;
