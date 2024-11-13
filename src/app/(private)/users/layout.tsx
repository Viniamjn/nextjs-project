import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Userslayout metadata',
    description: 'Userslayout metadata',

}
type Props = { children: React.ReactNode }

const UsersLayout= ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default UsersLayout ;