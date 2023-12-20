import './App.css'
import { useRoutes, useLocation } from 'react-router-dom'
import { WelcomePage } from '../Pages/WelcomePage'
import { Home } from '../Pages/Home'
import { CreateTask } from '../Pages/CreateTask'
import {TasksInPogress} from '../Pages/TasksInPogress'
import {TasksCompleted} from '../Pages/TasksCompleted'
import { SearchTask } from '../Pages/SearchTask'

import { NavigationApp } from '../Components/NavigationApp'
import { DetailTask } from '../Pages/DetailTaks'
import { UpdateTask } from '../Pages/UpdateTask'
import { Calculator } from '../Pages/Calculator'
import {Settings} from '../Pages/Settings'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <WelcomePage />},
    {path: '/tasks/all', element: <Home />},
    {path: '/tasks/completed', element: <TasksCompleted />},
    {path: '/tasks/in-pogress', element: <TasksInPogress />},
    {path: '/create-task', element: <CreateTask />},
    {path: '/search-task', element: <SearchTask />},
    {path: '/task/:id',element: <DetailTask />},
    {path: '/update/:id', element: <UpdateTask />},
    {path: '/calculator', element: <Calculator />},
    {path: '/settings', element: <Settings />},
  ])
  return routes
}

function App() {
  const {pathname} = useLocation()

  return (
    <>
      <AppRoutes />
      {pathname !== '/' &&  <NavigationApp />}
    </>
  )
}

export default App
