import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="home" class="navbar-brand">SHUNNO iT</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="home" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="registration" class="nav-link active" aria-current="page">Registration</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navber