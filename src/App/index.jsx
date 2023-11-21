import './App.css'
import { useRoutes } from 'react-router-dom'
import { WelcomePage } from '../Pages/WelcomePage'
import { Home } from '../Pages/Home'
import { CreateTask } from '../Pages/CreateTask'
import {TasksInPogress} from '../Pages/TasksInPogress'
import {TasksCompleted} from '../Pages/TasksCompleted'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <WelcomePage />},
    {path: '/home', element: <Home />},
    {path: '/create-task', element: <CreateTask />},
    {path: 'completed', element: <TasksCompleted />},
    {path: 'in-pogress', element: <TasksInPogress />},
  ])
  return routes
}

function App() {

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
