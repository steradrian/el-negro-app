import React, { useEffect, useState } from 'react';
import './User.css';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { postUser, putUser, selectedUser } from '../../axios';
import { useHistory, useParams } from 'react-router-dom';

interface ParamType {
    id: string 
}
interface Values {
    name: string | undefined,
    avatar: string | undefined,
    jobDescription: string | undefined,
}

interface currUser {
    id: number,
    name: string,
    avatar: string,
    createdAt: string,
    jobDescription: string,
}

const User :React.FC = () => {
    const [currentUser, setCurrentUser] = useState<currUser>();

    const history = useHistory();
    const { id } = useParams<ParamType>();
    const idNumber = parseInt(id);

    useEffect(() => {
        selectedUser(idNumber).then((data) => {
            setCurrentUser(data);
        })
    }, [])

    const initialValues: Values = {
        name: currentUser?.name,
        avatar: currentUser?.avatar,
        jobDescription: currentUser?.jobDescription,
    };
    
    const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
            if (values.name === undefined) {
                values.name = currentUser?.name;
            }
            if (values.avatar === undefined) {
                values.avatar = currentUser?.avatar;
            }
            if (values.jobDescription === undefined) {
                values.jobDescription = currentUser?.jobDescription;
            }
            putUser({ name: values.name, avatar: values.avatar, jobDescription: values.jobDescription }, idNumber);
            history.push('/users');
            setSubmitting(false);
        })
    }

    return (
        <div className="user">
            <Card>
                <Typography><strong>Edit user details</strong></Typography>
                
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                render={() => {
                    return <Form>
                        <InputLabel>Name and Surname</InputLabel>
                        <Field placeholder={currentUser?.name} name='name' type='text' />

                        <InputLabel>Avatar</InputLabel>
                        <Field placeholder={currentUser?.avatar} name="avatar" type="text" />

                        <InputLabel>Job description</InputLabel>
                        <Field placeholder={currentUser?.jobDescription} name="jobDescription" type="text" />

                        <div className="buttons">
                            <Button type="submit">Submit</Button>
                            <Button onClick={() =>history.push('/users')}>Cancel</Button>
                        </div>
                        
                    
                    </Form>;
                }}
                />
            </Card>
        </div>
    )
}

export default User
