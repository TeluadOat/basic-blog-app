import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="home-page">
            {/* Hero / Welcome Section */}
            <section className="home-hero">
                <h2>Welcome to the Blog Viewer</h2>
                <p>Explore posts, read details, and enjoy.</p>
            </section>

            <section className="home-actions">
                <h3>Get Started</h3>
                <p>Check out some recent posts or learn more about this project:</p>
                <div className="action-buttons">
                    <Link to="/posts" className="btn-primary">View Posts</Link>
                    <Link to="/about" className="btn-secondary">About</Link>
                </div>
            </section>

            <section className="home-quote">
                <blockquote>
                    “Reading is to the mind what exercise is to the body.” – Joseph Addison
                </blockquote>
            </section>
        </div>
    )
}