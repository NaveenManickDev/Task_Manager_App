import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import TaskList from './components/TaskList'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/create' element={<Create />}/>
          <Route path='/tasklist' element={<TaskList />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
