import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './app.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BootstrapDemos from './features/bootstrap-demos';
import AgGridDemo from './features/ag-grid-demo';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">AST React Starter</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Demos" id="demo-nav-dropdown">
                  <NavDropdown.Item href="/bootstrap-demos">
                    Bootstrap Demos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="ag-grid-demo">
                    AgGrid Demo
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/bootstrap-demos" component={BootstrapDemos} />
          <Route path="/ag-grid-demo" component={AgGridDemo} />
        </div>
      </Router>
    );
  }
}

export default App;
