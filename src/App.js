import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login/index.js";
import ForgotPassword from "./components/ForgotPassword/index.js";
import ResetPassword from "./components/ResetPassword/index.js";
import Popup from "./components/Popups/index.js";
import TextBox from "./components/TextBox";
import Table from "./components/Table";
import Dashboard from "./components/Dashboard";
import ImageUpload from "./components/Imageupload";
import DragAndDropExample from "./components/DragAndDropExample";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/ForgotPassword" exact element={<ForgotPassword />} />
        <Route path="/" element={<Navigate replace to="/ForgotPassword" />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/Popup" exact element={<Popup />} />
        <Route path="/TextBox" exact element={<TextBox />} />
        <Route path="/Table" exact element={<Table />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/ImageUpload" exact element={<ImageUpload />} />
        <Route path="/DragAndDropExample" exact element={<DragAndDropExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;