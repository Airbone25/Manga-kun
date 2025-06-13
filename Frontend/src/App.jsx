import Home from "./Home";
import NavBar from "./NavBar";
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Manga from "./Manga";
import Login from "./Login";
import Footer from "./Footer";
import Signup from "./Signup";
import { useContext } from "react";
import { LoginContext } from "./contexts/LoginContext";
import Profile from "./Profile";

function Message() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#f5f5f5",
    }}>
      <h1>🚧 Website Under Maintenance</h1>
      <p>We’re performing some upgrades. Please check back shortly.</p>
    </div>
  );
}

function App() {
  const context = useContext(LoginContext);
  const maintenanceMode = true;

  if (maintenanceMode) {
    return <Message />;
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={context.user ? <Create /> : <Navigate to="/login" />} />
        <Route path="/:id" element={<Manga />} />
        <Route path="/profile" element={context.user ? <Profile /> : <Navigate to="/" />} />
        <Route path="/login" element={!context.user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!context.user ? <Signup /> : <Navigate to="/" />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
