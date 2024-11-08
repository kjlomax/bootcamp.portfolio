import React from 'react';
import { Link } from 'react-router-dom';
// import router from '../main.jsx';

function Navigation() {
   return (
     <nav className='navbar navbar-default'>
        <ul>
            <li><Link to='/AboutMe'>About Me</Link></li>
            <li><Link to='/Portfolio'>Portfolio</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/Resume'>Resume</Link></li>
        </ul>
    </nav>
   );
}

export default Navigation;