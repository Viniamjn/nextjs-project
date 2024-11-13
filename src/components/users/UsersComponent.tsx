import Link from 'next/link';
import React, { FC } from 'react';
import style from './UserList.module.css'
type Props = {
    users: { id: number, name: string } []
}
const UsersComponent:FC<Props> = ({users}) => {
    return (
        <div className={style.UserList}>
            {
                users.map(({id, name}) => (<div key={id} className={style.UserItem}>
                    <Link href={'/users/' + id}>{name}</Link>

                </div>))
            }
        </div>
    );
};

export default UsersComponent;