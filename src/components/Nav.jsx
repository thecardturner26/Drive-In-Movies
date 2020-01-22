import React from 'react'
// import { Route, Switch, Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    let nav = props.user ?
      <div>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      </div>
      :
      <div>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/foodpage'>Menu</Link>
      </div>;
  
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
  };
export default Nav;
