import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className="country">
            <p>Nigeria</p>
        </div>

        <div className="endFooter">
            <div className="left">
                <Link to="/About">About</Link>
                <Link to="/advertising">Advertising</Link>
                <Link to="/business">Business</Link>
                <Link to="/search">How Search works</Link>
            </div>

            <div className="middle">
                <Link>Carbon neutral since 2007</Link>
            </div>

            <div className="right">
                <Link to="/privacy">Privacy</Link>
                <Link to="/term">Terms</Link>
                <Link to="/setting">Setting</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer