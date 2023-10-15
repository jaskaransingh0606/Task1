import React from 'react'

import signInForm from '../assets/SignInForm.png'
import cross from '../assets/Cross.png'
import popUpImage from '../assets/PopUpImage.png'


function SignInPopUp(props) {
  return (
    <>
    {/* <div className='bg-popupBg z-10 right-0 left-0 top-0 bottom-0 fixed'></div> */}

   <button className='z-30 mt-32 mr-80' onClick={props.toggleSignIn}><img src={cross}></img></button>

    <div className='w-736 h-513 flex flex-col space-y-4 fixed inset-y-1/2 ml-80 -translate-y-2/4 z-20 bg-white' >
    

        <div className='flex justify-center content-center items-center bg-greenBg w-736 h-12'>
            <p className='text-green font-light me-2 ms-2'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now </p>
        </div>

        <div className='flex flex-row justify-between align-center content-center'>
            <div className='ml-4'><img src={signInForm}></img></div>
            <div className='flex flex-col space-y-12 align-center content-center'>
                {/* <div className='mt-2 mr-16'><img src={signIn}></img></div> */}
                <div className='mr-4'><img src={ popUpImage }></img></div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default SignInPopUp
