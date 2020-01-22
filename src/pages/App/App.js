import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import Nav from '../../components/Nav';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Footer from './components/Footer'
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
          
          <Nav />
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
