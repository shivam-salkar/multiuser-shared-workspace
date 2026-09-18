import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Workspace from "../pages/Workspace/Workspace";
import Login from "../pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
