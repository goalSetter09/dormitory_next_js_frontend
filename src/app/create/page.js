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
      <p><input type="text" id="studentNumber" placeholder="Student Number" value={state.studentNumber} onChange={handleChange}></input></p>
      <p><input type="text" id="name" placeholder="ex) 홍길동" value={state.name} onChange={handleChange}></input></p>
      <p><input type="text" id="phone" placeholder="Phone Number" value={state.phone} onChange={handleChange}></input></p>
      <p><input type="number" id="roomNum" placeholder="Room Number" value={state.roomNum} onChange={handleChange}></input></p>
      <p><button type="submit">회원가입</button></p>
    </form>
  )
}