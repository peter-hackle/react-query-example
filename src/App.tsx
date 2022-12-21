import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import PostList from "./components/PostList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
