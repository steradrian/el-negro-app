import React, { useEffect, useState } from 'react';
import './Users.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Users() {

    const [users, setUsers] = useState([]);

    const fetechUsers = () => {
        return axios.get('https://60606a4904b05d0017ba2799.mockapi.io/api/v1/users')
            .then(({ data }) => {
                return data;
            })
            .catch(err => {
                console.error(err);
            })
    };

    useEffect(() => {
        fetechUsers().then(usersList => {
            setUsers(usersList);
        })
    }, [])

    return (
        <div className="users">
            <Button startIcon={<AddIcon fontSize="large" />}>
                <strong>Add user</strong>
            </Button>
            <TableContainer className="users__list">
                <Table aria-label="simple table">
                    <TableHead className="users__listHeader">
                        <TableRow>
                            <TableCell align="left"><strong>Id</strong></TableCell>
                            <TableCell align="left"><strong>Name</strong></TableCell>
                            <TableCell align="left"><strong>Avatar</strong></TableCell>
                            <TableCell align="left"><strong>Created At</strong></TableCell>
                            <TableCell align="left"><strong>Job Description</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map(({ id, name, avatar, createdAt, jobDescription }) => (
                            <TableRow key={id} className="users__listRow">
                                <TableCell align="left">{id}</TableCell>
                                <TableCell align="left">{name}</TableCell>
                                <TableCell align="left">{avatar}</TableCell>
                                <TableCell align="left">{createdAt}</TableCell>
                                <TableCell align="left">{jobDescription}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Users;
