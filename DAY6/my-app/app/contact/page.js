'use client'
import { useSearchParams } from "next/navigation"

const Contact = () => {

  const searchparams = useSearchParams()

  return (
    <div className='text-3xl text-center text-blue-100 px-5 py-5'>
      The name is <span className="text-blue-600 font-bold">{searchparams.get('name')}</span> and the location <span className="text-blue-600 font-bold">{searchparams.get('location')}</span>
    </div>
  )
}

export default Contact
