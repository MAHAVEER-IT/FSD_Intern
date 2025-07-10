import React from 'react'

export default function Login() {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-96 m-5  flex flex-col gap-2 py-4 px-4 justify-center items-center bg-blue-100 rounded-2xl'>
                <label htmlFor="name">Name: </label>
                <input className='outline outline-blue-600 rounded-3xl px-3 py-3' type='text' placeholder='enter name' id='name' name='name' required />
                <label htmlFor="password">Password: </label>
                <input className='outline outline-blue-600 rounded-3xl px-3 py-3' type='password' placeholder='enter password' id='password' name='password' required />
                <button className='bg-green-400 rounded-2xl px-4 py-4 w-20'>Login</button>
            </div>
        </div>
    )
}
