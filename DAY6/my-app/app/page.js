'use client'; // This is a client component
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Card from "./components/Card";



/*
  server component cannot :
  1. Listen to browser events
  2. Use browser APIs (like localStorage, sessionStorage, etc.)
  3. Use state or effects (like useState, useEffect, etc.)
*/
export default function Home() {

  // const [name, setName] = useState('')
  // const router = useRouter();

  // const handleClick = ()=>{
  //   router.push(`/${name }`)
  // }



  return (
    <>
      {/* <div className="flex flex-col gap-3 justify-center items-center px-20 py-20">
      <input type="text" placeholder="enter leo movie charector name" value={name} onChange={(e)=>setName(e.target.value)} className="outline outline-white outline-3 h-10 w-70 rounded-2xl"/>
      <button onClick={handleClick} className="bg-green-300 text-white w-20 h-15 rounded-xl outline-white">Submit</button>
    </div> */}
      <Card />
    </>
  );
}
