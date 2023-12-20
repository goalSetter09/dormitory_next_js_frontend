import Link from "next/link";
import Washer from "../components/dryer";
import Dryer from "../components/dryer";

export default async function Page() {
  const response = await fetch("http://localhost:8080/dryer/list", { cache: 'no-store' });
  const result = await response.json();
  console.log(result);
  return (
    <>
      <h1>Washer</h1>
      <ul className="available-list">
        {result.length > 0 ? result.map(dryer => (
          <Dryer dryer={dryer}><Link href={"/dryer/" + dryer.number}>{dryer.number}</Link></Dryer>
        )) : <p>예약가능한 건조기가 없습니다.</p>}
      </ul >
    </>
  );
}