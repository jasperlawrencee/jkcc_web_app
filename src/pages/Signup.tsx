import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import { IoLogoGoogle } from 'react-icons/io5'
import { auth, db} from 'src/config/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Bounce, ToastContainer, toast } from 'react-toastify';


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
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const bday = new Date(`${birthMonth}/${birthDay}/${birthYear}`);

  const signUpWithGoogle = async () => {
    setSigningUp(true);

    signInWithPopup(auth, new GoogleAuthProvider())
    .then(async response => {

      const userData = {
        name: response.user.displayName,
        email: response.user.email,
        phone: response.user.phoneNumber,
        street: '',
        state: '',
        city: '',
        postalCode: '',
        birthDay: '',
        role: "user",
        verified: response.user.emailVerified,
      }

      await setDoc(
        doc (
          db,
          'users',
          response.user.uid
        ),
        userData,
      )

      toast.success('🎉 Account Created!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        })
      navigate('/')
    })
    .catch(error => {
      console.log(error)
      setSigningUp(false)
    })
  }

  const signUpWithEmail = async () => {
    setSigningUp(true)
    setError('')
    
    if (!formValidator()) {
      setSigningUp(false)
      return;
    }

    // user object instance to pass to firestore

    createUserWithEmailAndPassword(auth, email, password)
    .then(async response => {
      console.log("User created: ", response.user.uid)

      const userData = {
        name: `${firstName} ${middleName} ${lastName}`,
        email: email,
        phone: phone,
        street: street,
        state: state,
        city: city,
        postalCode: postalCode,
        birthDay: bday,
        role: "user",
        verified: false,
      }

      // add user to firestore
      await setDoc(
        doc(
          // firestore instance
          db,
          // collection
          'users',
          // document id
          response.user.uid),
          // data to upload
          userData
        )

      toast.success('🎉 Account Created!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        })

      navigate('/');
    })
    .catch(error => {
      console.log(error)
      setError(error.message)
      setSigningUp(false)
    })
    // TODO: login user after creating account
  }

  const signUpValidator = () => {
    // password at least 8 characters, one uppercase, one lowercase, one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (password !== confirmPassword) {
      setError("Passwords do not match!")
      return;
    }

    if (step === 1 && password === confirmPassword) {
      if (email === '' || password === '' || confirmPassword === '') {
        setError('Please fill in all fields')
        return;
      }
      if (!emailRegex.test(email)) {
        setError('Invalid email address')
        return;
      }
      if (!passwordRegex.test(password)) {
        setError('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number')
        return;
      }
      setStep(2)
    }
  }

  const formValidator = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      phone === '' ||
      street === '' ||
      state === '' ||
      city === '' ||
      postalCode === '' ||
      birthDay === '' ||
      birthDay === 'Day' ||
      birthMonth === '' ||
      birthMonth === 'Month' ||
      birthYear === '' ||
      birthYear === 'Year'
    ) {
      setError('Please fill in all fields')
      return false;
    }
    return true;
  }   
  
  return (
    <div className='bg-slate-50 w-full h-[100vh] flex-col items-start justify-start inline-flex'>
      <div className="h-full w-full flex flex-col gap-y-2.5 px-8 py-4 items-center justify-center text-xs">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
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
              <div className="relative w-full">
                <input 
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <button
                type='button'
                className='absolute right-4 top-2.5'
                onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOffOutline size={15}/> : <IoEyeOutline size={15}/>}
                </button>
              </div>
              <div className="relative w-full">
                <input 
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                />
                <button
                type='button'
                className='absolute right-4 top-2.5'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <IoEyeOffOutline size={15}/> : <IoEyeOutline size={15}/>}
                </button>
              </div>
              <button 
              className='px-4 py-2 bg-zinc-800 text-slate-50 rounded-md justify-center items-center w-full'
              onClick={signUpValidator}
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
              <div className="flex flex-row gap-2.5 justify-around w-full">
                <select
                  className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex'
                  value={birthDay}
                  onChange={e => setBirthDay(e.target.value)}
                >
                  <option value="">Day</option>
                  {[...Array(31).keys()].map(day => (
                    <option key={day + 1} value={day + 1}>{day + 1}</option>
                  ))}
                </select>
                <select
                  className='w-full px-4 py-2 rounded-md border justify-start items-center inline-flex'
                  value={birthMonth}
                  onChange={e => setBirthMonth(e.target.value)}
                >
                  <option value="">Month</option>
                  {[
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                  ].map((month, index) => (
                    <option key={index + 1} value={index + 1}>{month}</option>
                  ))}
                </select>
                <select
                  className='w-full px-4 py-2 rounded-md border inline-flex'
                  value={birthYear}
                  onChange={e => setBirthYear(e.target.value)}
                >
                  <option value="">Year</option>
                  {[...Array(100).keys()].map(year => (
                    <option key={year + 1950} value={year + 1950}>{year + 1950}</option>
                  ))}
                </select>
              </div>
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
                placeholder='State / Province'
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
              className={`px-4 py-2 rounded-md justify-center items-center w-full ${signingUp ? 'bg-gray-300' : 'bg-zinc-800 text-slate-50'}`}
              disabled={signingUp}
              onClick={signUpWithEmail}
              >
                {signingUp ? 'Signing Up...' : 'Sign Up'}
              </button>
              {error && <div className='text-red-500 text-xs'>{error}</div>}
            </>
          )}
        </div>
      </div>
    </div>
  )
}