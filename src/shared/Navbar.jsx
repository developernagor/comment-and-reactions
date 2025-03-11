import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
      <Link to="/register"><button className='btn bg-pink-500 text-white'>Register</button></Link>
      <Link to="/login"><button className='btn bg-pink-500 text-white'>Login</button></Link>
      <Link to="/task"><button className='btn bg-pink-500 text-white'>Task</button></Link>
    </div>
  )
}

export default Navbar
