import { Link } from "react-router-dom"
import { useContext } from "react"
import { PostsContext } from "../Contexts/PostsContext"
export default function AllPosts() {
    const posts = useContext(PostsContext)
    const postsList = posts.map((p) => {
        return (
            <Link key={p.id} to={`/posts/${p.id}`}>
                <div key={p.id} style={{ textAlign: "center" }}>
                    <h1 style={{ margin: "20px auto", width: "fit-content", backgroundColor: "red" }}>{p.title}</h1>
                </div>
            </Link>
        )
    })
    return (
        <>
            {postsList}
        </>
    )
}