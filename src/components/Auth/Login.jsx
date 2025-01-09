import styles from './Login.module.css'
import React, { useState } from 'react'

function Login({loginHandling}) { // loginHandling function received as a prop from App.jsx
    const [email, setEmail] = useState('') // State Variables for storing the value entered in the email and password input
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault() // Prevents the default behaviour of form (i.e. form refresh page after we submit it)
        loginHandling(email,password) // Passing data from child component(Login.jsx) to parent component(App.jsx) , Basically - Calling the loginHandling function (received as a prop from App.jsx) with the entered email and password
        
        // console.log("Email is:",email)  // whatever(email or password)user enters in input field , it prints that on console
        // console.log("Password is:",password) 

        setEmail("") // Resets or empties the input fields 
        setPassword("")
    }
    // Purpose: •To gather the user’s email and password  •Pass them to the parent component (App.jsx) via loginHandling.
    return (
        <div className={styles.loginContainer}>
            <div>
                <form onSubmit={(e)=>{
                    handleSubmit(e)}} 
                    className={styles.loginForm}>
                    <input value={email} onChange={(e)=>{ 
                        setEmail(e.target.value)}} required className={styles.emailInput} type="email" placeholder='Enter your email'/>  
                        {/* In these input fields - onChange={(e)=>{setEmail(e.target.value)}}  , this is accessing the latest value entered in the input fields by user and sending to the parent component*/} 
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className={styles.passInput} type="password" placeholder='Enter your password'/>
                    <button className={styles.loginBtn}>Log In</button>
                </form>
            </div>
        </div>
    )}
  export default Login