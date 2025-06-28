import Home from "./pages/Home"
import NavBar from "./components/NavBar";
import Create from "./pages/Create";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Manga from "./pages/Manga";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import { useContext } from "react";
import { LoginContext } from "./contexts/LoginContext";
import Profile from "./pages/Profile";
import PDFViewer from "./components/PDFViewer";
import AddChapter from "./pages/AddChapter";

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
  const maintenanceMode = false;

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
        <Route path="/view-chapter/:pdf" element={<PDFViewer/>}/>
        <Route path="/add-chapter/:id" element={<AddChapter/>}/>
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
