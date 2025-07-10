import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const params = useParams();
  return (
    <div className='font-bold text-3xl text-center'>
      <h1>Welcome! {params.username}</h1> 
    </div>
  )
}
