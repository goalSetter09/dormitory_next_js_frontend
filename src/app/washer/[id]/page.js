'use client'
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
      <h1>{"Washer " + id + "!!"}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();

        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            studentNumber: studentNumber,
            washerNumber: parseInt(id, 10),
          }),
          cache: 'no-store'
        };
        fetch("http://localhost:8080/washer/reserve", options)
          .then((res) => {
            if (res.ok) {
              console.log(res);
              router.push("/");
            }
          })
      }}>
        <input type="text" id="studentNumber" placeholder="Student Number" value={studentNumber} onChange={handleChange}></input>
        <button type="submit">예약</button>
      </form>
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

      <Warning />
    </>
  );
}