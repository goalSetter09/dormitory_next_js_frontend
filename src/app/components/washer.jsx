"use client"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Washer(props) {
  return (
    <>
      <ul className="washer">
        <Link href={"/washer/" + props.washer.number}>{props.washer.number}번 세탁기</Link>
      </ul>
      <style jsx>
        {`
          ul {
            margin: 0 auto;
            padding: 0;
            text-align: center;
          }

          a {
            text-align: center;
          }
        `}
      </style>
    </>
  )
};