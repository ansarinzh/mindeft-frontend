import "./App.css";
import "antd/dist/antd.css";
import Login from "./Pages/Login";
import { Routes, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResetPassword from "./Pages/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/reset-password" element={<ResetPassword />} />
              <Route exact path="/forgot-password" element={<ForgotPassword />} />
              <Route exact path="/" element={<Home />} />
            
            </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
