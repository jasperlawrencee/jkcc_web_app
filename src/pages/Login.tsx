import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { IoLogoGoogle } from 'react-icons/io5'
import auth from 'src/config/firebaseConfig'

export const Login = () => {
  const navigate = useNavigate();

  const [loggingIn, setLoggingIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signInWithGoogle = async () => {
    setLoggingIn(true);

    signInWithPopup(auth, new GoogleAuthProvider())
    .then(response => {
      console.log("User signed in: ", response.user.uid);
      navigate('/');
    })
    .catch(error => {
      console.error(error);
      setLoggingIn(false);
    })
  }

  const signInWithEmail = async () => {
    setLoggingIn(true);
    setError('');

    signInWithEmailAndPassword(auth, email, password)
    .then(response => {
      console.log("User signed in: ", response.user.uid);
      navigate('/');
    })
    .catch(error => {
      console.log(error);
      setError(error.message);
      setLoggingIn(false);
    })
  }

  return (
    <div className='bg-slate-50 w-full h-[100vh] flex-col items-start justify-start inline-flex'>
      <div className="h-full w-full flex flex-col px-8 py-4 items-center justify-center text-xs">
        <div className="max-w-[380px] flex flex-col items-center bg-white p-8 rounded-md gap-y-2.5 shadow-md">
          
          <div className="text-center text-xl font-semibold leading-7">Log In</div>

          <div className="text-center text-base font-normal">Enter your credentials to log in to your account</div>
          <input 
          type="text"
          placeholder='Email'
          className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex'
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
          <input
          type="password"
          placeholder='Password'
          className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex'
          value={password}
          onChange={e => setPassword(e.target.value)}
          />

          {/* Signin with email and password button */}
          <button 
          className='px-4 py-2 bg-zinc-800 text-slate-50 rounded-md justify-center items-center w-full'
          onClick={signInWithEmail}
          disabled={loggingIn}
          >
            Sign In with Email
          </button>
          {/* Display error message */}
          {error && <div className='text-red-500 text-xs'>{error}</div>}

          <div className="text-xs font-normal">OR CONTINUE WITH</div>
          {/* Signin with google button */}
          <button 
          className='flex items-center justify-center w-full px-4 py-2 bg-zinc-800 text-slate-50 rounded-md gap-2.5'
          onClick={signInWithGoogle}
          disabled={loggingIn}
          >
            <IoLogoGoogle />
            Sign In with Google
          </button>

          <div className="flex gap-2.5 items-center justify-center w-fit text-zinc-800">
            Don't have an account? <a href="/register" className='underline'>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}
