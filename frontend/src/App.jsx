import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Send from './pages/Send'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <div>
      <BrowserRouter>
          <Routes>

            <Route path ="/signup" element ={<Signup/>}/>
            <Route path ="/" element ={<Signup/>}/>
            <Route path ="/signin" element ={<Signin/>}/>
            <Route path ="/Dashboard" element ={<Dashboard/>}/>
            <Route path ="/send" element ={<Send/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
