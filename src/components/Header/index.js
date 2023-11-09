import {Link } from 'react-router-dom';
import arrow from './Unfold_More.svg';  
import logo from './Logo.svg'

import './Header.css'

export function Header() {
    return(
        <header>
            <div className="header--secondary">
                <div className="inner--container">
                    <ul>
                        <li><Link className='nav-item' to='/aboutus'>About us</Link></li>
                        <li><Link className='nav-item' to='/faq'>FAQ</Link></li>
                        <li><Link className='nav-item' to='/blog'>Blog</Link></li>
                        <li><Link className='nav-item' to='/contactus'>Contact us</Link></li>
                    </ul>
                    <span>US$ <img src={arrow}  alt="" /></span>
                </div>
            </div>
            <div className="header--main">
                <div className="inner--container">
                    <ul>
                        <li><Link to="/destinations" className='nav-item' >Destinations</Link></li>
                        <li><Link to="/" className='nav-item' >Private trips</Link></li>
                    </ul>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <div className='buttons'>
                        <Link className='nav-btn btn-primary'>I'm Feeling Lucky</Link>
                        <Link to="/signin" className='nav-btn btn-outline' >Login</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}