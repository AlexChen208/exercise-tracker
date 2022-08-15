import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false)
    return (
    <main>
      <h1 className="title">Exercise Tracker</h1>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
    </main>
    )
}