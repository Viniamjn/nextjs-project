import Link from 'next/link';
import React from 'react';
import style from './Menu.module.css'

const Menu = () => {

    return (
        <div>
            <ul className={style.Menu}>

                <li>
                    <Link href={'users'}>users</Link>

                </li>
                <li>
                    <Link href={'posts'}>posts</Link>

                </li>
                <li>
                    <Link href={'comments'}>comments</Link>

                </li>
            </ul>
        </div>
    );
};

export default Menu;