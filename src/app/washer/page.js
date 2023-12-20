import Link from "next/link";
import Washer from "../components/washer";
import '../globals.css'

export default async function Page() {
  const response = await fetch("http://localhost:8080/washer/list", { cache: 'no-store' });
  const result = await response.json();
  console.log(result);
  return (
    <>
      <h1>Washer</h1>
      <ul className="available-list">
        {result.length > 0 ? result.map(washer => (
          <Washer washer={washer}><Link href={"/washer/" + washer.number}>{washer.number}</Link></Washer>
        )) : <p>예약가능한 세탁기가 없습니다.</p>}
      </ul >
    </>
  );
}