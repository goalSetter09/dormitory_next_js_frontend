"use client"

import Link from "next/link";
import { useEffect, useState } from "react"

export default function Washer(props) {
  return (
    <ul>
      <h1><Link href={"/washer/" + props.washer.number}>{props.washer.number}번 세탁기</Link></h1>
      <li>
        시작 시간: {props.washer.start_time}
      </li>
      <li>
        종료 시간: {props.washer.end_time}
      </li>
    </ul>
  )
};