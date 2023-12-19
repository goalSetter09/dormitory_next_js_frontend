import Link from 'next/link'
import './globals.css'

export default function Home() {
  return (
    <>
      <ul>
        <li><Link href="/create">회원가입</Link></li>
        <li><Link href="/washer">세탁기 예약</Link></li>
        <li><Link href="/washer/cancel">세탁기 예약 취소</Link></li>
        <li><Link href="/dryer">건조기 예약</Link></li>
        <li><Link href="/dryer/cancel">건조기 예약 취소</Link></li>
      </ul>
    </>
  )
}
