import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("home");
      const{getTotalCartAmount,getTotalItem,token,setToken}=useContext(StoreContext);
      const toHover=()=>{
        setClick(!click)
      }
      const[click,setClick]=useState(false);
     
      const navigate=useNavigate();
      const logout=()=>{
        setClick(!click)
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
      }
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.mylogo} alt="" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to='/'onClick={()=>setMenu("home")} className={menu==="home"}>home</Link>
        <a href='#explore-menu'onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}>{getTotalItem()===0?"":getTotalItem()}</div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
            :<div onClick={toHover} className='navbar-profile'>
              <img src={assets.profile_icon} alt="" /></div>}
              <ul className={click?'nav-profile-dropdown':"nav-profile-dropdown-hide"}>
                <li ><img src={assets.bag_icon} alt="" /><p>Orderd</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
        </div>
    </div>
  )
}

export default Navbar