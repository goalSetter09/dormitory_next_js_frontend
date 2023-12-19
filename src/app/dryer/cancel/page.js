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
        <p><input type="text" id="studentNumber" placeholder="Student Number" value={studentNumber} onChange={handleChange}></input></p>
        <p><input type="number" id="dryerNumber" placeholder="Dryer Number" value={dryerNumber} onChange={handleChange}></input></p>
        <p><button type="submit">예약취소</button></p>
      </form>
      <Warning />
    </>
  );
}