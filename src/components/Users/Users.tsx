import React, { useEffect, useState } from 'react';
import './Users.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Modal from '@material-ui/core/Modal';
import { users } from '../../axios';
import AddUserFormik from './AddUserModal/AddUserFormik';
import { useHistory } from 'react-router-dom';

export interface User {
    id: number,
    name: string,
    avatar: string,
    createdAt: string,
    jobDescription: string,
}

function Users() {

    const history = useHistory();


    const [open, setOpen] = useState(false);

    const [usersArr, setUsersArr] = useState<User[]>([]);

    useEffect(() => {
        users().then((data) => {
            setUsersArr(data);
        })       
    }, [])

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className="users">
            <Button startIcon={<AddIcon fontSize="large" />} onClick={handleOpen}>
                Add user
            </Button>

            <Modal open={open} onClose={handleClose} className="users__modal">
                <AddUserFormik id={usersArr.length + 1} />
            </Modal>
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
                           {usersArr.map(({ id, name, avatar, createdAt, jobDescription }) => (
                            <TableRow key={id} className="users__listRow" onClick={() =>history.push(`/users/${id}`)}>
                                    <TableCell align="left">{id}</TableCell>
                                    <TableCell align="left"><strong>{name}</strong></TableCell>
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
