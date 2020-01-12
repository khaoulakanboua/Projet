import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateMatiere extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeMatiereNomM = this.onChangeMatiereNomM.bind(this);
    this.onChangeMatiereEns = this.onChangeMatiereEns.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      NomM: '',
      Ens: ''    }
  }

  onChangeMatiereNomM(e) {
    this.setState({ NomM: e.target.value })
  }

  onChangeMatiereEns(e) {
    this.setState({ Ens: e.target.value })
  }

  

  onSubmit(e) {
    e.preventDefault()

    const matiereObject = {
      NomM: this.state.NomM,
      Ens: this.state.Ens
    };

    axios.post('http://localhost:4001/matieres/create-matiere', matiereObject)
      .then(res => console.log(res.data));

    this.setState({
      NomM: '',
      Ens: ''


    });
    alert("Matiére bien ajouté");
  }

  render() {
    return (<div style={{paddingLeft:0,paddingRight:80 ,marginTop:30,width:1200}}>
      <Form onSubmit={this.onSubmit}>
        
     <center> <h1>Ajouter une matière </h1></center><br></br>
        <Form.Group controlId="Name">
          <Form.Label>Nom de matière : </Form.Label>
          <Form.Control required="true" type="text" value={this.state.NomM} onChange={this.onChangeMatiereNomM} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Enseignant : </Form.Label>
          <Form.Control required="true" type="text" value={this.state.Ens} onChange={this.onChangeMatiereEns} />
        </Form.Group>
         <Button variant="primary" size="lg" block="block" type="submit">
          Ajouter
        </Button>
      </Form>
    </div>);
  }
}
