import './Navbar.css'
import Logo from  "../../assets/logo.png"
import Serach_icons from  "../../assets/search_icon.svg"
import bell_icons from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg"
import { useRef } from 'react';
import { useEffect } from 'react';
import { logout }  from "../../firebase.js"
const NavBar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })

  },[])

  return (
    <div ref={navRef} className='navbar' >
      <div className="navbar-left">
        <img src={Logo} alt="logo" />
        <ul>
          <li>How</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse b Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={Serach_icons} alt="icons" />
        <p>Childern</p>
        <img src={bell_icons} alt="icons" />
        <div className="navbar-profile"> 
<img src={profile_img} alt="profile" className='profile' />
          <img src={caret_icon} alt="icon" />

          <div className='dropdown' >
            <p onClick={()=>{logout()}} >Sign Out of Netflix</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar