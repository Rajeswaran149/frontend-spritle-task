import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MasterRegister() {
  const [username, setusername] = useState("goku");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phonenum, setphonenum] = useState("");
  const navigate = useNavigate();
  function handleRegister() {
    const response = axios.post(
      "https://backend-spritle-task.vercel.app/api/register/master",
      {
        username: username,
        name: name,
        email: email,
        password: password,
        phonenum: phonenum,
      }
    );
    if (response.data.status === "ok") {
      navigate("/StudentLogin");
    } else {
      navigate("/");
    }
  }
  return (
    <div className="MasterLoginCon">
      <div className="Logininside">
        <div className="description">
          <p className="hello">Welcome to our App Master 👋🏼</p>
          <span className="hellodec">Welcome to our application</span>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              className="credentialinput"
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your Full name"
            />
          </div>
          <div className="input">
            <input
              className="credentialinput"
              onChange={(e) => setusername(e.target.value)}
              placeholder="Enter your user name"
            />
          </div>
          <div className="input">
            <input
              className="credentialinput"
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input">
            <input
              className="credentialinput"
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your Password"
            />
          </div>
          <div className="input">
            <input
              className="credentialinput"
              onChange={(e) => setphonenum(e.target.value)}
              placeholder="Enter your Phonenum"
            />
          </div>
        </div>
        <div>
          <button className="loginbtn" onClick={handleRegister}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
