import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from './components/auth/signInPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<SignInPage />} />
      </Routes>
    </Router>

  )
}

export default App
