import React from 'react'
import "./CSS/HomePage.css"
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import Searchpage from './Searchpage';

function HomePage() {
  return (
    <div className='home'>
      <div className="home_header">

        <div className="rightSide">
          <Link to="/gmail">Gmail</Link>
          <Link to="/image">Image</Link>
          <AppsIcon className='icon' />
          <AccountCircleIcon className='userIcon' />
        </div>

      </div>

      <div className="home_body">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="google Logo" />
        <Searchpage/>
      </div>
    </div>
  )
}

export default HomePage