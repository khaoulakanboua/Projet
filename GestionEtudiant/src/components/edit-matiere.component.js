import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditMatiere extends Component {

  constructor(props) {
    super(props)

    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      NomM: '',
      Ens: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4001/matieres/edit-matiere/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          NomM: res.data.NomM,
         Ens: res.data.Ens
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChange1(e) {
    this.setState({ NomM: e.target.value })
  }
  onChange2(e) {
    this.setState({ Ens: e.target.value })
  }
  

  onSubmit(e) {
    e.preventDefault()

    const matiereObject = {
      NomM: this.state.NomM,
      Ens: this.state.Ens
    };

    axios.put('http://localhost:4001/matieres/update-matiere/' + this.props.match.params.id, matiereObject)
      .then((res) => {
        console.log(res.data)
        console.log('Matière bien modifiée')
      }).catch((error) => {
        console.log(error)
      })

  

    // Redirect to Student List 
    this.props.history.push('/matiere-list')
  }


  render() {
    return (<div style={{paddingLeft:0,paddingRight:80 ,marginTop:30,width:1200}}>
      <center><h1>Modifier une matière</h1></center>
      <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="Name">
          <Form.Label>Nom de matière</Form.Label>
          <Form.Control required="true"  name="NomM" type="text" value={this.state.NomM} onChange={this.onChange1} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Enseignant</Form.Label>
          <Form.Control required="true" name="Ens" type="text" value={this.state.Ens} onChange={this.onChange2} />
        </Form.Group>

       

        

        <Button variant="primary" size="lg" block="block" type="submit">
          Modifier
        </Button>
      </Form>
    </div>);
  }

}