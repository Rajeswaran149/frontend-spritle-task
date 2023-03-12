import React from "react";
import "../styles/MasterLogin.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

export default function StudentLogin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://backend-spritle-task.vercel.app/api/studentlogin",
      {
        email: email,
        password: password,
      }
    );
    if (response.status === 200) {
      localStorage.setItem("studenttoken", response.data.studenttoken);
      navigate("/StudentHomepage");
    } else {
      navigate("/studentlogin");

      window.location.reload();
    }
  };

  return (
    <div className="MasterLoginCon">
      <div>
        <div className="description">
          <p className="hello">Hello Student 👋🏼</p>
          <span className="hellodec">Welcome back , you've been missed</span>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              className="credentialinput"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input">
            <input
              className="credentialinput"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
          </div>
        </div>
        <div>
          <button className="loginbtn" onClick={handleLogin}>
            Log in
          </button>
        </div>

        <p className="registerquo">
          Dont have register yet?{" "}
          <span className="registerflow">
            <Link to="/StudentRegister">Register now</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
