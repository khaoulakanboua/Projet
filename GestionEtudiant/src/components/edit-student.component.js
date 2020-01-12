import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {

  constructor(props) {
    super(props)

    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onChange3= this.onChange3.bind(this);
    this.onChange4 = this.onChange4.bind(this);
    this.onChange5 = this.onChange5.bind(this);
    this.onChange6 = this.onChange6.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      firstName: '',
      email: '',
      lastName: '',
      numA :'',
      cne:'',
      A:''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4001/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          firstName: res.data.firstName,
          numA: res.data.numA,
          lastName: res.data.lastName,
          email: res.data.email,
          cne: res.data.cne,
          A: res.data.A
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChange1(e) {
    this.setState({ cne: e.target.value })
  }
  onChange2(e) {
    this.setState({ firstName: e.target.value })
  }
  onChange3(e) {
    this.setState({ lastName: e.target.value })
  }
  onChange4(e) {
    this.setState({ email: e.target.value })
  }
  onChange5(e) {
    this.setState({ numA: e.target.value })
  }
 onChange6(e) {
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
      A: this.state.A,

    };

    axios.put('http://localhost:4001/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Etudiant bien modifié')
      }).catch((error) => {
        console.log(error)
      })

  

    // Redirect to Student List 
    this.props.history.push('/student-list')
  }


  render() {
    return (<div style={{paddingLeft:0,paddingRight:80 ,marginTop:30,width:1200}}>
      <center><h1>Modifier un étudiant</h1></center>
      <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="Name">
          <Form.Label>CNE</Form.Label>
          <Form.Control required="true"  name="cne" type="text" value={this.state.cne} onChange={this.onChange1} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Prénom</Form.Label>
          <Form.Control required="true" name="firstName" type="text" value={this.state.firstName} onChange={this.onChange2} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Nom</Form.Label>
          <Form.Control required="true" name="lastName" type="text" value={this.state.lastName} onChange={this.onChange3} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control required="true" name="email" type="email" value={this.state.email} onChange={this.onChange4} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Numéro Apogee</Form.Label>
          <Form.Control required="true" name="numA" type="text" value={this.state.numA} onChange={this.onChange5} />
        </Form.Group>
<Form.Group controlId="Name">
          <Form.Label>Absence</Form.Label>
          <Form.Control required="true" name="numA" type="text" value={this.state.A} onChange={this.onChange6} />
        </Form.Group>
        <Button variant="primary" size="lg" block="block" type="submit">
          Modifier
        </Button>
      </Form>
    </div>);
  }

}