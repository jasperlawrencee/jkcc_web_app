import React from 'react'
import { IoLogoGoogle } from 'react-icons/io5'


export const Login = () => {

  return (
    <div className='bg-slate-50 w-full h-[85vh] flex-col items-start justify-start inline-flex'>
      <div className="h-full w-full flex flex-col gap-y-2.5 px-8 py-4 items-center justify-center text-xs">
        <div className="text-center text-xl font-semibold leading-7">Sign In</div>
        <div className="text-center text-base font-normal">Enter your credentials to sign in to your account</div>
        <input 
        type="text"
        placeholder='Email'
        className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex'
        />
        <input 
        type="password"
        placeholder='Password'
        className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex'
        />
        <button className='px-4 py-2 bg-zinc-800 text-slate-50 rounded-md justify-center items-center w-full'>Sign In with Email</button>
        <div className="text-xs font-normal">OR CONTINUE WITH</div>
        <button className='flex items-center justify-center w-full px-4 py-2 bg-zinc-800 text-slate-50 rounded-md gap-2.5'>
          <IoLogoGoogle />
          Sign In with Google
        </button>
        <div className="flex gap-2.5 items-center justify-center w-fit text-zinc-800">
          Don't have an account? <a href="/register" className='underline'>Sign Up</a>
        </div>
      </div>
    </div>
  )
}
