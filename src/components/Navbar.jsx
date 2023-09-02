import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()


  return (
    <nav>
      <button onClick={() => navigate(-1)}>⬅Back</button>
       <Link  to='/'><h4 style={{margin: 10}}>Home</h4></Link>
       <Link to='/contacto'><h4 style={{margin: 10}}>Contacto</h4></Link>
       <Link to='/beer'><h4 style={{margin: 10}}>Beer</h4></Link>
    </nav>
  )
}

export default Navbar