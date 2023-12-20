'use client'
import Link from 'next/link'
import './globals.css'

export default function Home() {
  return (
    <div>
      <ul>
        <li><Link href="/create">회원가입</Link></li>
        <li><Link href="/washer">세탁기 예약</Link></li>
        <li><Link href="/washer/cancel">세탁기 예약 취소</Link></li>
        <li><Link href="/dryer">건조기 예약</Link></li>
        <li><Link href="/dryer/cancel">건조기 예약 취소</Link></li>
      </ul>
      <style jsx>
        {`
          ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            margin: 0;
            padding: 18px 20px;
            font-weight: bold;
          }
          li {
            border: 2px #00AEFF solid;
            border-radius: 20px;
            width: 30%;
            padding: 10px 0;
            margin: 5px auto;
            list-style: none;
            text-align: center;
          }

          ul > li >a {
            text-decoration: none;
            font-size: 18px;
          }
          
      `}
      </style>
    </div>
  )
}
