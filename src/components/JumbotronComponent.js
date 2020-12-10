import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Login } from "@styled-icons/entypo";
// import bgImage from '/assets/images/jumbFjord.jpg';

const bgImage = "/assets/images/cliff-fjord2.jpg";

class Jumbo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
    this.toggleModal();
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light sticky="top" expand="sm">
          <div className="container">
            <NavbarBrand className="mr-2" href="/">
              <img className="flag" src="/assets/images/flag.png" alt="NuCamp Logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa-fa-home fa-lg" /> home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa-fa-list fa-lg" /> about us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/tours">
                    <i className="fa-fa-info fa-lg" /> tours
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/rentals">
                    <i className="fa-fa-address-card fa-lg" /> rentals
                  </NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-text ml-auto">
                <Button outline onClick={this.toggleModal}>
                  <Login size="20" /> login
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron fluid style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
          <div className="container">
            <div className="row">
              <div className="col jumText">
                <h1>REISE NORGE</h1>
                <h2>hvor vil du gå?</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username" innerRef={(input) => (this.username = input)} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password" innerRef={(input) => (this.password = input)} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember" innerRef={(input) => (this.remember = input)} />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Jumbo;
