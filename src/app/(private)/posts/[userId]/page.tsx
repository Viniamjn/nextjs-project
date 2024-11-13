import React from 'react';
type Params = { userId: string }

const PostPage = async ({params}: { params: Params }) => {

    const { title,body,id} = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.userId).then(res => res.json());

    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostPage;