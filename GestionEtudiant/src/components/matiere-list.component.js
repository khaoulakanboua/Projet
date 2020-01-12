import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import MatiereTableRow from './MatiereTableRow';


export default class MatiereList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      matieres: []
    };
  }

  componentDidMount() {
    setInterval(() => {
        axios.get('http://localhost:4001/matieres/')
      .then(res => {
        this.setState({
          matieres: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
    }, 1000);
  
  }

  DataTable() {
    return this.state.matieres.map((res, i) => {
      return <MatiereTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
     <center> <h1>Liste des matières : </h1></center><br></br>
      <Table  striped bordered hover variant="primary" >
        <thead>
          <tr>
            <th>Nom de matière</th>
            <th>Enseignant</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}