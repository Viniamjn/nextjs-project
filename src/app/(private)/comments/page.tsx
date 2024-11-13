import CommentsComponent from '@/components/comments/CommentsComponent';
import { IComments } from '@/models/comments/IComments';
import React from 'react';

const CommentsPage =async () => {
    const comments:IComments[]=await
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json());
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};


export default CommentsPage;