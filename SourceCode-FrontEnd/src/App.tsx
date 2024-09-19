import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./Components/Profile/profilePage";
 //import Footer from './components/Footer/Footer'
 //import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
