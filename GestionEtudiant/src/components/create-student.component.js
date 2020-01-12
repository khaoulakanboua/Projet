import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentFirstName = this.onChangeStudentFirstName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentLastName = this.onChangeStudentLastName.bind(this);
    this.onChangeStudentNumA = this.onChangeStudentNumA.bind(this);
    this.onChangeStudentCne = this.onChangeStudentCne.bind(this);
    this.onChangeStudentA = this.onChangeStudentA.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      firstName: '',
      email: '',
      lastName: '',
      numA :'',
      cne:'',
      A:''
    }
  }

  onChangeStudentFirstName(e) {
    this.setState({ firstName: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentLastName(e) {
    this.setState({ lastName: e.target.value })
  }
 onChangeStudentNumA(e) {
    this.setState({ numA: e.target.value })
  }
  onChangeStudentCne(e) {
    this.setState({ cne: e.target.value })
  }
   onChangeStudentA(e) {
    this.setState({ A: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      firstName: this.state.firstName,
      cne: this.state.cne,
      lastName: this.state.lastName,
      email: this.state.email,
      numA: this.state.numA,
      A: this.state.A
    };

    axios.post('http://localhost:4001/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      firstName: '',
      email: '',
      lastName: '',
      cne :'',
      numA:'',
      A:''


    });
    alert("Eudiant bien ajouté");
  }

  render() {
    return (<div style={{paddingLeft:0,paddingRight:80 ,marginTop:30,width:1200}}>
      <Form onSubmit={this.onSubmit}>
        
     <center> <h1>Ajouter un étudiant </h1></center><br></br>
        <Form.Group controlId="Name">
          <Form.Label>CNE : </Form.Label>
          <Form.Control required="true" type="text" value={this.state.cne} onChange={this.onChangeStudentCne} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Nom : </Form.Label>
          <Form.Control required="true" type="text" value={this.state.firstName} onChange={this.onChangeStudentFirstName} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Prénom : </Form.Label>
          <Form.Control required="true" type="text" value={this.state.lastName} onChange={this.onChangeStudentLastName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email : </Form.Label>
          <Form.Control required="true" type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Numéro Apogee : </Form.Label>
          <Form.Control required="true" type="text" value={this.state.numA} onChange={this.onChangeStudentNumA} />
        </Form.Group>
          <Form.Group controlId="Name">
          <Form.Label>Absence : </Form.Label>
          <Form.Control required="true" type="text" value={this.state.A} onChange={this.onChangeStudentA} />
        </Form.Group>
        <Button variant="primary" size="lg" block="block" type="submit">
          Ajouter
         
        </Button>
      </Form>
    </div>);
  }
}
