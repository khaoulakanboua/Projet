import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <header className="App-header">
        <Navbar expand="lg" bg="primary" variant="dark" sticky="top">
        <Navbar.Brand href="#home">
        <div style={{fontSize:20,fontWeight:700,color:"white"}}>
     Gestion des étudiants</div> 
    </Navbar.Brand>
          <Container>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                 Ajouter un étudiant
                </Link>
              </Nav>
              <Nav>
                <Link to={"/student-list"} className="nav-link">
                 Liste des étudiants
                </Link>
              </Nav>
             

              <Nav>
                <Link to={"/create-matiere"} className="nav-link">
                  Ajouter une matière
                </Link>
              </Nav>
 <Nav>
                <Link to={"/matiere-list"} className="nav-link">
                 Liste des matières
                </Link>
              </Nav>
          
              <Nav>
                <Link to={"/login"} className="nav-link">
                  Déconnexion
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

            </div>
        );
    }
}
 
export default NavBar;