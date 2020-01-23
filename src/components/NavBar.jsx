import React from 'react'
// import { Route, Switch, Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav_Bar = (props) => {
    let navbar = props.user ?
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
        {navbar}
      </div>
    );
  };
export default Nav_Bar;



{/* <Navbar className="border-bottom" bg="transparent" expand="lg">
<Navbar.Brand>Garrett Love</Navbar.Brand>

<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
<Navbar.Collapse id="navbar-toggle">
  <Nav className="ml-auto">
    <Link className="nav-link" to="/">Home</Link>
    <Link className="nav-link" to="/about">About</Link>
    <Link className="nav-link" to="/contact">Contact</Link>
  </Nav>
</Navbar.Collapse>
</Navbar> */}