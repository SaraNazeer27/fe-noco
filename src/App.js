import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Popup from "./components/Popups";
import TextBox from "./components/TextBox";
import MyComponent from "./components/MyComponent";
import AlignmentExample from "./components/AlignmentExample";
import Table from "./components/Table";
import Dashboard from "./components/Dashboard";

function App() {

  const user = localStorage.getItem("token");

  return (
    <BrowserRouter>
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/ForgotPassword" exact element={<ForgotPassword />} />
			<Route path="/" element={<Navigate replace to="/ForgotPassword" />} />
			<Route path="/ResetPassword" exact element={<ResetPassword />} />
			<Route path="/" element={<Navigate replace to="/ResetPassword" />} />
			<Route path="/Popup" exact element={<Popup />} />	
      <Route path="/Popup" exact element={<Popup />} />
			<Route path="/TextBox" exact element={<TextBox />} />
			<Route path="/MyComponent" exact element={<MyComponent />} />
			<Route path="/AlignmentExample" exact element={<AlignmentExample />} />
			<Route path="/Table" exact element={<Table />} />
			<Route path="/dashboard" exact element={<Dashboard />} />
			
		</Routes>
		</BrowserRouter>
  );
}

export default App;
