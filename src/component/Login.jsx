import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigat = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email && !password){
      setErr("Fill the all details")
    }else if(!email){
      setErr("Enter your use Email")
    }else if(!password){
      setErr("Enter your password")
    }else{
      setErr('');
      navigat('/employ');
    }
  }

  return (
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e)=>{setEmail(e.target.value)}} aria-describedby="emailHelp" placeholder='Enter your Email address'></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your Password'></input>
  </div>
  <p>{err}</p>
  <button type="submit" onClick={handleSubmit} class="btn btn-primary">Login</button>
</form>

  )
}

export default Login