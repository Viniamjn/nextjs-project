import React from 'react';
import style from './details.module.css'
type Params = { id: string }

const UserPage = async ({params}: { params: Params }) => {

    const { name, email, phone, website} = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id).then(res => res.json());

    return (
        <div className={style.details}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserPage;