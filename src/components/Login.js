import React,{useState} from 'react'
import Header from './Header'

const Login = () => {
const[signUpForm, setSignUpForm] = useState(true);

const toggleSignUpForm = () => {
    setSignUpForm(!signUpForm);
}
  return (
    <div>
        <Header/>
        <div>
        <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/76c5a455-c62c-46d4-8653-3924728113e3/web/IN-en-20260504-TRIFECTA-perspective_596176fe-3b1e-48ec-8a00-a0acb34e68f1_medium.jpg' alt='logo'/>
        </div>
        <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/12 p-8 bg-black/75 rounded-sm text-white bg-opacity-80'>
        <h1 className='text-3xl font-bold mb-4'>{signUpForm ? 'Sign In' : 'Sign Up'}</h1>
        {
            !signUpForm && <input className='w-full rounded-sm bg-gray-500 text-white p-4 my-4' type='text' placeholder='Full Name'/>
        }
        <input className='w-full rounded-sm bg-gray-500 text-white p-4 my-4' type='email' placeholder='Email or phone number'/>
        <input className='w-full rounded-sm bg-gray-500 text-white p-4 my-4' type='password' placeholder='Password'/>
        <button className='w-full  rounded-sm bg-red-600 text-white p-4 my-6'>{signUpForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignUpForm}> {signUpForm ? 'New to Netflix? Sign Up Now' : 'Alredy Registered? Sign In'}</p>
       
        </form>
    </div>
  )
}

export default Login