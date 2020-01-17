import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='NavBar'>
      <Link to="/login" className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
    </div>
  );
};

export default Nav;
