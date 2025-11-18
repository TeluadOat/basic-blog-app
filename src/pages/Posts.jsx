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

    if (posts.length === 0) return <p style={{ textAlign: "center" }}>Loading posts...</p>;

    return (
        <div>
            <h2 className="page-title">Posts</h2>
            <div className="posts-grid">
                {posts.map(post => (
                    <div key={post.id} className="post-card">
                        <div className="post-meta">
                            <span><strong>Post ID:</strong> {post.id}</span>
                            {/* <span><strong>User ID:</strong> {post.userId}</span> */}
                        </div>
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-body">
                            {post.body.slice(0, 20)}...
                        </p>
                        <Link to={`/posts/${post.id}`} className="read-more-link">
                            Read more
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
};