import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CommantLayout metadata',
    description: 'CommantLayout metadata',

}
type Props = { children: React.ReactNode }

const CommantLayout= ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CommantLayout;