import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';


export default function ReactHookForm() {
  const { register, handleSubmit, formState: { errors , isSubmitting} } = useForm();


  const onSubmit = async (data) => {
    console.log("Submitting...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Submitted Data:", data);
  };

  useEffect(() => {
    console.log(register);
  }, [register]);

  console.log(register);
  return (
    <center className='px-5 py-10'>
      {isSubmitting && <div className='font-bold text-red-400 text-2xl'>Loading...</div>}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col h-90 w-80 bg-green-100 gap-2 rounded-2xl px-5 py-5'>
        <label htmlFor="username" className='font-bold'>UserName : </label>
        <input type="text" placeholder="enter name" id="username" {...register('username')} className='outline outline-black rounded-2xl px-5 py-5' />
        <input type="email" placeholder='enter email' id='email' {...register('email', { required: true })} className='outline outline-black rounded-2xl px-5 py-5' />
        <input type="password" placeholder='enter Password'id='password' {...register('password', { required: true, minLength: { value: 2, message: 'Password Minimum length is 2' }, maxLength: { value: 5, message: 'Password Maximum length is 5' } })} className='outline outline-black rounded-2xl px-5 py-5' />
        {errors.password && <div className='text-red-500  font-bold'>{errors.password.message}</div>}
        <button type='submit' disabled = {isSubmitting} className='bg-amber-400 rounded-2xl w-20 disabled:bg-amber-600'>Submit</button>
      </form>
    </center>
  )
}
