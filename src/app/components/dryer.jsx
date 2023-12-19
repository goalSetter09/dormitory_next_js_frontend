"use client"

import Link from "next/link";
import { useEffect, useState } from "react"

export default function Dryer(props) {
  return (
    <ul>
      <h1><Link href={"/dryer/" + props.dryer.number}>{props.dryer.number}번 건조기</Link></h1>
      <li>
        시작 시간: {props.dryer.start_time}
      </li>
      <li>
        종료 시간: {props.dryer.end_time}
      </li>
    </ul>
  )
};