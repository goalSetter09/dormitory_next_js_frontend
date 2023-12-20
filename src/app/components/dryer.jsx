"use client"

import Link from "next/link";
import { useEffect, useState } from "react"

export default function Dryer(props) {
  return (
    <>
      <ul>
        <Link href={"/dryer/" + props.dryer.number}>{props.dryer.number}번 건조기</Link>
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