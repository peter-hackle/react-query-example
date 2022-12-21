import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetail from "./components/basic/PostDetail";
import PostList from "./components/basic/PostList";
import PostDetailWithFactory from "./components/factory/PostDetailWithFactory";
import PostListWithFactory from "./components/factory/PostListWithFactory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/factory" element={<PostListWithFactory />} />
        <Route path="/factory/posts/:id" element={<PostDetailWithFactory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
