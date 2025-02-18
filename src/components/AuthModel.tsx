import React, { useState } from 'react';
import { useGeneralStore } from '../stores/generalStores';
import { ImCross } from 'react-icons/im';
import Login from './Login';
import Register from './Register';

const AuthModel = () => {
    const [isRegistered , setIsRegistered ] = useState(false)
    const setLoginIsOpen = useGeneralStore((state) => state.setLoginIsOpen)
    const isLoginOpen = useGeneralStore((state) => state.isLoginOpen)
  return (
    <div id='AuthModel' className='fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-[#D2C9C6] bg-opacity-100'>
      <div className='relative bg-[#BDAAA4] w-full max-w-[470px] h-[70%] p-4 rounded-lg'>


        <div className='w-full flex justify-end'>
            <button onClick={() => setLoginIsOpen(!isLoginOpen)} className='p-1.5 rounded-full bg-[#AB9087]'>
              <ImCross color='#000000 ' size="26"/>
            </button>
        </div>
        {isRegistered? <Login/> : <Register />}
        <div className='absolute flex items-center justify-center py-5 left-0 bottom-0 border-t w-full'>
            <span className='text-sm text-[#695d58]'>
                Don't have an account?
            </span>
            <button
            className='text-[14px] text-[#3b2119] font-semibold pl-1'
             onClick={() => setIsRegistered(!isRegistered)}>
                {isRegistered ? <span>Sign up</span> : <span>Log in</span>}
            </button>
        </div>

      </div>
    </div>
  )
}

export default AuthModel
