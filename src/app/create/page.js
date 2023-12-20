"use client"

import '../globals.css'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [state, setState] = useState({
    name: "",
    studentNumber: "",
    phone: "",
    roomNum: 0,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className='wrapper'>
      <h1>
        회원가입
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault();

        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            studentNumber: state.studentNumber,
            name: state.name,
            phone: state.phone,
            roomNum: parseInt(state.roomNum, 10),
          })
        };

        fetch("http://localhost:8080/student/create", options)
          .then(() => {
            router.push("/");
          })
      }}>
        <input type="text" id="studentNumber" placeholder="Student Number" value={state.studentNumber} onChange={handleChange}></input>
        <input type="text" id="name" placeholder="Name" value={state.name} onChange={handleChange}></input>
        <input type="text" id="phone" placeholder="Phone Number" value={state.phone} onChange={handleChange}></input>
        <input type="number" id="roomNum" placeholder="Room Number" value={state.roomNum} onChange={handleChange}></input>
        <button type="submit">회원가입</button>
      </form>
      <style jsx>
        {`
          h1 {
            font-size: 20px;
            margin: 0;
            padding:0;
          }
          form {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin: auto;
            color: #fff;
            padding: 18px 20px;
            font-weight: bold;
          }
          form > input {
            border: 2px solid #00AEFF;
            border-radius: 20px;
            width: 30%;
            margin: 5px auto;
            text-align: center;
          }

          form > button {
            border: 2px solid #00AEFF;
            border-radius: 20px;
            width: 30%;
            margin: 5px auto;
            text-align: center;
            button-style: none;
          }
          
      `}
      </style>
    </div>
  )
}