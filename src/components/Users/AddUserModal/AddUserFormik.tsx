import React, { useState } from 'react';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import './AddUserFormik.css';
import { postUser } from '../../../axios';

interface Values {
    name: string,
    avatar: string,
    jobDescription: string,
}

interface AddUserFormikProps {
    id: number,
}

const AddUserFormik: React.FC<AddUserFormikProps> = ({id}) => {

    const createdAt = new Date();

    const initialValues: Values = {
        name: '',
        avatar: '',
        jobDescription: '',
    };
    const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
            if (values !== initialValues) {
            postUser({ id: id, name: values.name, avatar: values.avatar, createdAt: createdAt.toDateString(), jobDescription: values.jobDescription });
            alert('User added successfully!');
            setSubmitting(false);
            }

        });
    };
    const validate = (values: Values) => {
        let errors: Values = {
            name: '',
            avatar: '',
            jobDescription: ''
        };

        if (!values.name) {
            errors.name = 'Required';
        }

        if (!values.avatar) {
            errors.avatar = 'Required'
        } else if (/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(values.avatar)) {
            errors.avatar = 'Invalid avatar link';
        }

        if (!values.jobDescription) {
            errors.jobDescription = 'Required'
        }

        return errors;
    };

    return (
        <div className="addUser__container">
            <Typography variant="h4"><strong>Create a new user</strong></Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
                render={() => {
                    return <Form>
                        <InputLabel>Name and Surname</InputLabel>
                        <Field placeholder="John Doe" name="name" type="text" />
                        <p className="error__message"><ErrorMessage name="name" /></p>

                        <InputLabel>Avatar</InputLabel>
                        <Field placeholder="https://johndoe.com/pictures/john-doe.jpg" name="avatar" type="text" />
                        <p className="error__message"><ErrorMessage name="avatar" /></p>

                        <InputLabel>Job Description</InputLabel>
                        <Field placeholder="Front End" name="jobDescription" type="text" />
                        <p className="error__message"><ErrorMessage name="jobDescription" /></p>

                        
                        <Button type="submit"><strong>Add user</strong></Button>
                    </Form>;
                }}
            />

        </div>
    )
}

export default AddUserFormik
