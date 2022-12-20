import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Login from './Login';

const Registration = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
console.log(password.length)
    const navigate = useNavigate();
    
    const handleRegistration = (e) => {
        e.preventDefault();
        if(!name && !email && !password){
            setErr("Fill in the Details")
        }else if(!name){
            setErr("Enter your user Name")
        }else if(!email){
            setErr("Enter your use Email")
        }else if( password.length<3){
            setErr("Enter your password")
        }else{
            navigate('/login');
            <Login name="name" />
        }
    }

  return (
    <div>
        <h2>Registration</h2>
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">User Name</label>
                <input type="text" onChange={(e)=>{setName(e.target.value)}} class="form-control" id="inputEmail4"></input>
            </div>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email address</label>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} class="form-control" id="inputEmail4"></input>
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} class="form-control" id="inputPassword4"></input>
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity"></input>
            </div>
            <p>{err}</p>
            <div class="col-12">
                <button onClick={handleRegistration} type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </form>
    </div>
  )
}

export default Registration