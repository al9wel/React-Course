import { Routes, Route, Link } from "react-router-dom"
import "./App.css";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
import Hello from "./Components/Hello";
import NotFound from "./Components/NotFound";
import PostDetails from "./Components/PostDetails";
import { PostsContext } from "./Contexts/PostsContext";
import NewPost from "./Components/NewPost";
import PostsLayout from "./Components/PostsLayout";
let postsData = [
  {
    id: 1,
    title: "title 1",
    body: "body 1"
  },
  {
    id: 2,
    title: "title 2",
    body: "body 2"
  },
  {
    id: 3,
    title: "title 3",
    body: "body 3"
  }
]
function App() {
  return (
    <>
      <PostsContext.Provider value={postsData}>
        <div className="nav">
          <Link to={"/home"}>
            <button>Home</button>
          </Link>
          <Link to={"/hello"}>
            <button>Hello</button>
          </Link>
          <Link to={"/posts"}>
            <button>Posts</button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/posts" element={<PostsLayout />}>
            <Route index element={<Posts />} />
            <Route path=":postId" element={<PostDetails />} />
            <Route path="new" element={<NewPost />} />
          </Route>

          <Route path="/hello" element={<Hello />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </PostsContext.Provider>
    </>
  )
}

export default App
