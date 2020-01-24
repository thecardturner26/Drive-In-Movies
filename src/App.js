import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Stars and Stripes Drive In',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Stars and Stripes Drive In',
        subTitle: 'Movies and Memories Under the Stars',
        text: 'Proudly serving the American Region since 1912.'
      },
      about: {
        title: 'Movies Playing'
      },
      contact: {
        title: 'Got A Question?'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true} style={{backgroundColor: "#b3deff",}}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg" >
            <Navbar.Brand>
              {/* Stars and Stripes Drive In */}
            <Col  className="Logo" xs={6} md={4}>
              <Image src="https://i.imgur.com/XnA0uWe.jpg" style={{width: '9em', borderRadius: '30%'}} />
            </Col>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">Movies</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;