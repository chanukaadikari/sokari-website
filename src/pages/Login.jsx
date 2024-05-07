import React from 'react'
import Style from './LoginSignup.module.css'

function LogInSignUp() {
  return (
    <div className={Style.LoginSignup}>
        <div className={Style.LogInSignUpContainer }>
            <h1>Sign Up</h1>
            <div className={Style.LogInSignUpFields}>
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Email Adress'/>
                <input type="password" placeholder='password'/>
            </div>
            <button>Continue</button>
            <p className={Style.LoginSignup}>Already have an account <span>Login here</span></p>
            <div className={Style.LoginSignupAgree}>
                <input type="checkbox" name='' id=''/>
                <p>By continuing, i agree to use of terms & privacy policy.</p>
            </div>
        </div>       
    </div>
  )
}

export default LogInSignUp