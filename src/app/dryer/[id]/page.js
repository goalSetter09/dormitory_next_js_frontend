"use client"
import Warning from "../../components/warning";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [studentNumber, setStudentNumber] = useState('');
  const handleChange = (e) => {
    setStudentNumber(e.target.value);
  };
  return (
    <>
      <h1>{"Dryer " + id + "!!"}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();

        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            studentNumber: studentNumber,
            dryerNumber: parseInt(id, 10),
          })
        };
        fetch("http://localhost:8080/dryer/reserve", options)
          .then((res) => {
            if (res.ok) {
              console.log(res);
              router.push("/");
            } else {
              console.log(res);
            }
          })
      }}>
        <p><input type="text" id="studentNumber" placeholder="Student Number" value={studentNumber} onChange={handleChange}></input></p>
        <p><button type="submit">예약</button></p>
      </form>
      <Warning />
    </>
  );
}