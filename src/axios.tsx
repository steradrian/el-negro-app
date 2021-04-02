import axios from 'axios';
import { User } from './components/Users/Users';

interface updatedUser {
    name: string | undefined,
    avatar: string | undefined,
    jobDescription: string | undefined
}

const fetchUsers = () => {
    return axios.get('https://60606a4904b05d0017ba2799.mockapi.io/api/v1/users')
};

const users = async () => {
    const response = await fetchUsers();
    return response.data;
}

const postUser = (user: User) => {
    axios.post('https://60606a4904b05d0017ba2799.mockapi.io/api/v1/users', user);
    console.log(user);
}

const selectedUser = async (id: number) => {
    const response = await axios.get(`https://60606a4904b05d0017ba2799.mockapi.io/api/v1/users/${id}`);
    return response.data;
}

const putUser = async (user: updatedUser, id: number) => {
    await axios.put(`https://60606a4904b05d0017ba2799.mockapi.io/api/v1/users/${id}`, { name: user.name, avatar: user.avatar, jobDescription: user.jobDescription });
}

    export { users, selectedUser, postUser, putUser };