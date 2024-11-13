import PostsComponent from '@/components/posts/PostsComponent';
import { IPosts } from '@/models/posts/IPosts';
import React from 'react';

const PostsPage =async () => {
    const posts:IPosts[]=await
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json());
    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;