import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router'


const Authentication = () => {
  const navigate=useNavigate();
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const postData=(e)=>{
    e.preventDefault();
     createUserWithEmailAndPassword(auth,email, password)
     .then((userCredentials)=>{
      const user=userCredentials.user
      console.log(user)
      navigate("/home")
      alert("Successfully sign up")

     })
     
  }
  const login=(e)=>{
    signInWithEmailAndPassword(auth, email, password);
  }

  

  return (
    <div className='container'>
      

<form>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary mx-2" onClick={postData}>Register</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={login}>Log in</button>
</form>

    </div>
  )
}

export default Authentication