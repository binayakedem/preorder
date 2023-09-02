import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const navigate=useNavigate()
  const handleOrder=()=>{
    navigate("/order");
  }
  const naviAuth=()=>{
    navigate("/")
  }
  
  return (
    <div className='container bg-primary'>
      <div className="row">
        <div className="col-11">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand fs-2"to="/home">FC</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink 
         
          className="nav-link active fs-3 mx-3" aria-current="page" to="/home">Home</NavLink>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link active fs-3 mx-3" aria-current="page" to="/item">Items</Link>
        </li>
        <li  className='nav-item'>
         <button onClick={handleOrder} className="bg-primary text-black border-0 fs-4 mt-2">Order Now</button>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
        <div className="col-1 mt-3"> 
        <div className="row">
          <div className="col-12">
        <button className='border-0' onClick={naviAuth}><FaUser size="30px" color="white"/></button>

          </div>
        </div>
        <div className="row">
          <div className="col-12">Log Out</div>
        </div>

       
        </div>
      </div>

    </div>
  )
}

export default Navbar