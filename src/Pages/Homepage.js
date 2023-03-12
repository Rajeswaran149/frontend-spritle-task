import React, { useState, useEffect } from "react";
import {
  one,
  two,
  three,
  four,
  five,
  plus,
  minus,
  divided_by,
  times,
  seven,
  six,
} from "../Function/Code";
import "../styles/Homepage.css";
import Question from "../components/Question";
import { decodeToken } from "react-jwt";
import axios from "axios";

export default function Homepage() {
  const token = localStorage.getItem("studenttoken");
  const decoded = decodeToken(token);
  const [one, setOne] = useState("");
  const [firstfunction, setFirstfunction] = useState(function () {});
  const [secondfunction, setSecondFunction] = useState(function () {});
  const [thirdfunction, setThirdFunction] = useState(function () {});
  const [Questions, setQuestions] = useState([]);

  useEffect(() => {
    const response = axios
      .post("https://backend-spritle-task.vercel.app/api/questions/", {
        username: decoded.username,
      })
      .then((res) => {
        setQuestions(res.data);
        console.log(res.data);
      });
  }, []);

  const consoleit = () => {
    let firstfunction = three;
    let secondfunction = firstfunction(times);
    let thirdfunction = secondfunction(five());
    console.log(thirdfunction);
  };

  return (
    <div className="Homecon">
      <p className="masterquesti">Master's Questions for you</p>
      <p>Here masters can provide question and ask for input !!!</p>
      {/* <button onClick={consoleit}>Console the result</button> */}
      {Questions.map((question, index) => {
        return (
          <Question
            questionmsg={question.message}
            mastername={question.masterusername}
            studentname={question.studentusername}
            id={question._id}
          />
        );
      })}
    </div>
  );
}
