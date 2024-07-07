import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { coincontext } from '../../context/coincontext'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const {setCurrency} = useContext(coincontext)
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

const currencyHandler=(event)=>{
  switch (event.target.value){
    case "usd":{
      setCurrency({name:"usd", symbol:"$"});
      break;
    }
    case "eur":{
        setCurrency({name:"eur", symbol:"€"});
        break;
    }
    case "inr":{
      setCurrency({name:"inr", symbol:"₹"});
      break;
    
    }
    default : {
      setCurrency({name:"usd", symbol:"$"});
      break;
    }
  }

}

  return (
    <div className='Navbar'>
      <Link to={'/'}>
        <img src={logo} alt="" className='logo'/>
        </Link>
        <ul>
        <Link to={'/'}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='Nav-right'>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            {
              isAuthenticated ?(
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Logout
    </button>
                
              ):(
                <button onClick={() => loginWithRedirect()}>Login<img src={arrow_icon} alt=""/></button>
                

              )
            }
            
            
            

        </div>

    </div>
  )
}

export default Navbar