import React from 'react';
type Params = { id: string }


const CommentPage =  async ({params}: { params: Params }) => {

    const { email,body,postId} = await fetch('https://jsonplaceholder.typicode.com/comments/' + params.id).then(res => res.json());

    return (
        <div>
            <p>{postId}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default CommentPage;