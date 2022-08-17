import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false)
    return (
      <>
      { showSignUp ?
          <SignUpForm setUser={setUser} setShowSignUp={setShowSignUp} showSignUp={showSignUp}/>
          :
          <LoginForm setUser={setUser} setShowSignUp={setShowSignUp} showSignUp={showSignUp}/>
      }
      </>
    )
}