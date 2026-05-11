import React,{useState, useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utilis/validation';

const Login = () => {
const[signUpForm, setSignUpForm] = useState(true);
const[errorMessage, setErrorMessage] = useState(null);

const email = useRef(null);
const password = useRef(null);

const handleButtonClick = () => {
console.log( email.current.value);
console.log(password.current.value);
const message = checkValidData(email.current.value, password.current.value);
setErrorMessage(message);
}

const toggleSignUpForm = () => {
    setSignUpForm(!signUpForm);
}
  return (
    <div className='relative h-screen w-screen bg-cover bg-center' style={{backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/76c5a455-c62c-46d4-8653-3924728113e3/web/IN-en-20260504-TRIFECTA-perspective_596176fe-3b1e-48ec-8a00-a0acb34e68f1_medium.jpg')`}}>
        <Header/>
        <form onSubmit={(e)=> e.preventDefault()} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-10/12 md:w-7/12 lg:w-5/12 xl:w-4/12 p-6 sm:p-8 bg-black/75 rounded-sm text-white bg-opacity-80' >
        <h1 className='text-2xl sm:text-3xl font-bold mb-4'>{signUpForm ? 'Sign In' : 'Sign Up'}</h1>
        {
            !signUpForm && <input className='w-full rounded-sm bg-gray-500 text-white p-3 sm:p-4 my-4 text-sm sm:text-base' type='text' placeholder='Full Name'/>
        }
        <input 
        className='w-full rounded-sm bg-gray-500 text-white p-3 sm:p-4 my-4 text-sm sm:text-base'
         ref={email} 
         type='email' 
         placeholder='Email or phone number'
         />
        <input
         className='w-full rounded-sm bg-gray-500 text-white p-3 sm:p-4 my-4 text-sm sm:text-base' 
         ref={password} 
         type='password' 
         placeholder='Password'
         />
         {errorMessage && <p className='text-red-500 text-sm mb-4'>{errorMessage}</p>}
        <button className='w-full rounded-sm bg-red-600 text-white p-3 sm:p-4 my-6 text-sm sm:text-base font-semibold hover:bg-red-700 transition' 
        onClick={handleButtonClick}>
          {signUpForm ? 'Sign In' : 'Sign Up'}
          </button>
        <p className='py-4 cursor-pointer text-sm sm:text-base hover:text-gray-300 transition' 
        onClick={toggleSignUpForm}> 
        {signUpForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In'}
        </p>
       
        </form>
    </div>
  )
}

export default Login