import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'

const Inotebook = () => {
  return (
    <div>
      <div className="col-lg-12 d-flex mt-2 py-3 flex-column justify-content-center align-items-center vh-40 text-center bg-transparent border rounded-3 shadow-sm hover:shadow-lg">
    <h1 className="display-3 fw-bold mb-3 text-dark">iNotebook</h1>
    <h2 className="text-secondary">Safe and Secured Notes</h2>
    <p className="lead mt-3">
        The perfect place to store your important notes and ideas, accessible anywhere and anytime.
    </p>
    <Link to="/login" className="btn btn-primary btn-lg mt-4 px-5 rounded-pill shadow-sm hover:shadow-lg">
        Get Started
    </Link>
</div>

      <About/>
    </div>
  )
}

export default Inotebook
