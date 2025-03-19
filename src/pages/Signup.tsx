import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import { IoLogoGoogle } from 'react-icons/io5'
import auth from 'src/config/firebaseConfig'

export const Signup = () => {
  const navigate = useNavigate();

  const [signingUp, setSigningUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const signUpWithGoogle = async () => {
    setSigningUp(true);

    signInWithPopup(auth, new GoogleAuthProvider())
    .then(response => {
      console.log("User created: ", response.user.uid)
      navigate('/')
    })
    .catch(error => {
      console.log(error)
      setSigningUp(false)
    })
  }

  const signUpWithEmail = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!")
      return;
    }

    setSigningUp(true)
    setError('')

    createUserWithEmailAndPassword(auth, email, password)
    .then(response => {
      console.log("User created: ", response.user.uid)
      navigate('/');
    })
    .catch(error => {
      console.log(error)
      setError(error.message)
      setSigningUp(false)
    })

    // add to firestore values
  }

  const validator = () => {
    setSigningUp(true);
    if (step === 1) {
      if (email === '' || password === '' || confirmPassword === '') {
        setError('Please fill in all fields')
        return;
      }
      // regex stuff here
      setStep(2)
    }
  }

  return (
    <div className='bg-slate-50 w-full h-[100vh] flex-col items-start justify-start inline-flex'>
      <div className="h-full w-full flex flex-col gap-y-2.5 px-8 py-4 items-center justify-center text-xs">
        {/* signup "dialog" */}
        <div className="max-w-[420px] flex flex-col items-center bg-white p-8 rounded-md gap-y-2.5 shadow-md">
          {/* step 1 */}
          {step === 1 && (
            <>
              <div className="text-center text-xl font-semibold leading-7">Sign In</div>
              <div className="text-center text-base font-normal">Enter your email and password to create your account</div>
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
              <input 
              type="password"
              placeholder='Confirm Password'
              className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              />
              <button 
              className='px-4 py-2 bg-zinc-800 text-slate-50 rounded-md justify-center items-center w-full'
              onClick={validator}
              disabled={signingUp}
              >
                Sign In with Email
              </button>
              
              {/* Display error message */}
              {error && <div className='text-red-500 text-xs'>{error}</div>}
              <div className="text-xs font-normal">OR CONTINUE WITH</div>
              <button 
              className='flex items-center justify-center w-full px-4 py-2 bg-zinc-800 text-slate-50 rounded-md gap-2.5'
              onClick={signUpWithGoogle}
              disabled={signingUp}
              >
                <IoLogoGoogle />
                Sign In with Google
              </button>
              <div className="flex gap-2.5 items-center justify-center w-fit text-zinc-800">
                Don't have an account? <a href="/login" className='underline'>Sign Up</a>
              </div>
            </>
          )}

          {/* step 2 */}
          {step === 2 && (
            <>
              <div className="text-center text-xl font-semibold leading-7">Sign In</div>
              <div className="text-center text-sm font-normal w-full flex">Personal Information</div>
              <div className="flex flex-row gap-2.5">
                <input
                className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex' 
                type="text" 
                placeholder='First Name'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                />
                <input
                className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex' 
                type="text" 
                placeholder='Middle Name (optional)'
                value={middleName}
                onChange={e => setMiddleName(e.target.value)}
                />
              </div>
              <input
                className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex' 
                type="text" 
                placeholder='Last Name'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                />
              {/* birthday component here */}
              <div className="text-center text-sm font-normal w-full flex">Contact Details</div>
              <input
                className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex' 
                type="text" 
                placeholder='Phone Number'
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <div className="text-center text-sm font-normal w-full flex">Address</div>
              <input
                className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex' 
                type="text" 
                placeholder='Street Address'
                value={street}
                onChange={e => setStreet(e.target.value)}
              />
              <div className="flex flex-row gap-2.5">
                <input
                className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex' 
                type="text" 
                placeholder='City'
                value={city}
                onChange={e => setCity(e.target.value)}
                />
                <input
                className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex' 
                type="text" 
                placeholder='State / City'
                value={state}
                onChange={e => setState(e.target.value)}
                />
              </div>
              <input
                className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex' 
                type="text" 
                placeholder='Postal / Zip Code'
                value={postalCode}
                onChange={e => setPostalCode(e.target.value)}
              />
              <button 
              className='px-4 py-2 bg-zinc-800 text-slate-50 rounded-md justify-center items-center w-full'
              onClick={signUpWithEmail}
              disabled={signingUp}
              >
                Submit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
