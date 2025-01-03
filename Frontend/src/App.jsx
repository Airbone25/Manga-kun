import Home from "./Home"
import NavBar from "./NavBar"
import Create from "./Create"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Manga from "./Manga"
import Login from "./Login"
import Footer from "./Footer"
import Signup from "./Signup"

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/:id" element={<Manga/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <div className="footer">
                <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App
