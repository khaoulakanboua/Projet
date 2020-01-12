import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class MatiereTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteMatiere = this.deleteMatiere.bind(this);
    }

    deleteMatiere() {
        axios.delete('http://localhost:4001/matieres/delete-matiere/' + this.props.obj._id)
            .then((res) => {
                console.log('Matière est bien supprimé!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.NomM}</td>
                <td>{this.props.obj.Ens}</td>
               
                <td>
                    <Link style={{backgroundColor:"blue"}} className="edit-link" to={"/edit-matiere/" + this.props.obj._id}>
                        Modifier
                    </Link>
                    <Button onClick={this.deleteMatiere} size="sm" variant="primary">Supprimer</Button>
                </td>
            </tr>
        );
    }
}