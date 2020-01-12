import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:4001/students/delete-student/' + this.props.obj._id)
            .then((res) => {
                console.log('Etudiant est bien supprimé!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.firstName}</td>
                <td>{this.props.obj.lastName}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.numA}</td>
                <td>{this.props.obj.cne}</td>
               <td>{this.props.obj.A}</td>
                <td>
                    <Link style={{backgroundColor:"blue"}} className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Modifier
                    </Link>
                    <Button onClick={this.deleteStudent} size="sm" variant="primary">Supprimer</Button>
                </td>
            </tr>
        );
    }
}