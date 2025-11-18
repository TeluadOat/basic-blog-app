import "./Footer.css";

export default function Footer() {
    return (
        <div>
            <footer className="blog-footer">
                <p className="copyrigt">© {new Date().getFullYear()}. My Blog Viewer.</p>
                <address className="contact-info">
                    <span>Tel: <a href="tel:+2348150344826">08150344826</a></span>
                    <span>Email: <a href="mailto:olubodunadeola2000@gmail.com">olubodunadeola2000@gmail.com</a></span>
                </address>
            </footer>
        </div>
    )
}