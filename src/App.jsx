import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import About from "./pages/About.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import "./App.css"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Posts" element={<Posts />} />
        <Route path="Posts/:postId" element={<PostDetail />} />
        <Route path="About" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
