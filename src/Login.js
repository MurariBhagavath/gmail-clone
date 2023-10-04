import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { signInWithPopup } from 'firebase/auth'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        signInWithPopup(auth, provider).then((userAuth) => {
            dispatch(login({
                displayName: userAuth.user.displayName,
                email: userAuth.user.email,
                photoUrl: userAuth.user.photoURL,
            }))
        }).catch(err => alert(err.message))
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png" alt="" />
                <Button className='login__button' variant='container' onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login