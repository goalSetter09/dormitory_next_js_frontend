'use client'
import { useState } from "react";

export default function Admin() {

  const [washerNumber, setWasherNumber] = useState(0);
  const [dryerNumber, setDryerNumber] = useState(0);
  
  const handleChange = (e) => {
    if(e.target.id === "washerNumber") {
      setWasherNumber(e.target.value);
    } else if(e.target.id === "dryerNumber") {
      setDryerNumber(e.target.value);
    } 
    
  };
  return (
    <div className="admin">
      <h1>
        관리자 페이지
      </h1>
      <ul className="admin-list">
        <li>
          <p>세탁기 추가</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: washerNumber
            };
            fetch("http://localhost:8080/washer/create", options)
              .then((res) => {
                if (res.ok) {
                  console.log(res);
                  router.push("/");
                } else {
                  console.log(res);
                }
              })
          }}>
            <input type="number" id="washerNumber" placeholder="Washer Number" value={washerNumber} onChange={handleChange}></input>
            <button type="submit">추가</button>
          </form>
        </li>
        <li>
          <p>건조기 추가</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: dryerNumber
            };
            fetch("http://localhost:8080/dryer/create", options)
              .then((res) => {
                if (res.ok) {
                  console.log(res);
                  router.push("/");
                } else {
                  console.log(res);
                }
              })
          }}>
            <input type="number" id="dryerNumber" placeholder="Dryer Number" value={dryerNumber} onChange={handleChange}></input>
            <button type="submit">추가</button>
          </form>
        </li>
      </ul>
    </div>
  );
}