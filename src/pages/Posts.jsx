import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../api/posts.js";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const data = await fetchPosts(10);
            setPosts(data);
        };
        getPosts();
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul className="post-list">
                {posts.map(post => {
                    return <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
};