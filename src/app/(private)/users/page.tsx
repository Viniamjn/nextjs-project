import { IUsers } from '@/models/users/IUsers';
import UsersComponent from '../../../components/users/UsersComponent';
import React from 'react';

const UsersPage = async () => {
    const users:IUsers[]=await
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json());
    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;