import React, { Component } from 'react';
import { Route, Switch, Redirect, Link} from 'react-router-dom';

import Nav_Bar from '../../components/NavBar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from '../../components/Footer'
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
// import Footer from ''
// import FoodPage from '../FoodPage/FoodPage'




class App extends Component {
  constructor() {
    super();
    this.state = {
      // ...this.getInitialState(),
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }


  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleFood = () => {
    this.setState({user: userService.getUser()})
  }


  

  render() {
    return (
      <div className='App'>
        <header >
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Drive in</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">Movies</Link>
            <Link className="nav-link" to="/contact">Tickets</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>          
        {/* <Nav /> */}
        </header>
        <Switch>
          <Route exact path='/' render={() =>
          <h1>Hi</h1>
          }/>

          <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            handleSignup={this.handleSignup}
          />
        }/>
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            history={history}
            handleSignup={this.handleSignup}
          />
        }/>
          <Redirect to='/login'
        
        />
        
      </Switch>
      <Footer />
      </div>
      
    );
    
  }

}

export default App;
