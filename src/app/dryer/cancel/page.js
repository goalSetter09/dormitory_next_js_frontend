'use client'
import Warning from "../../components/warning";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [studentNumber, setStudentNumber] = useState('');
  const [dryerNumber, setDryerNumber] = useState(0);
  const handleChange = (e) => {
    if (e.target.id === "studentNumber") {
      setStudentNumber(e.target.value);
    } else if (e.target.id === "dryerNumber") {
      setDryerNumber(e.target.value);
    }
  };

  return (
    <>
      <h1>건조기 예약 취소</h1>
      <form onSubmit={(e) => {
        e.preventDefault();

        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            studentNumber: studentNumber,
            dryerNumber: dryerNumber,
          })
        };
        fetch("http://localhost:8080/dryer/reserve/cancel", options)
          .then((res) => {
            if (res.ok) {
              console.log(res);
              router.push("/");
            }
          })
      }}>
        <input type="text" id="studentNumber" placeholder="Student Number" value={studentNumber} onChange={handleChange}></input>
        <input type="number" id="dryerNumber" placeholder="Dryer Number" value={dryerNumber} onChange={handleChange}></input>
        <button type="submit">예약취소</button>
      </form>
      <Warning />
      <style jsx>
        {`
          h1 {
            font-size: 20px;
            margin: 0;
            padding: 0;
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
    </>
  );
}