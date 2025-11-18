import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.log(err))
    }, [postId]);

    if (!post) return <p style={{ textAlign: "center" }}>Loading...</p>

    return (
        <div className="post-detail">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link className="back-link" to="/posts">
                ← Back to Posts
            </Link>
        </div>
    );

}