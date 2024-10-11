import Home from "./Home"
import NavBar from "./NavBar"
import Create from "./Create"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
