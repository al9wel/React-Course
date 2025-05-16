import { useParams } from "react-router-dom"
import { useContext } from "react"
import { PostsContext } from "../Contexts/PostsContext"
import NotFound from "./NotFound"
export default function PostDetails() {
    const posts = useContext(PostsContext)
    const { postId } = useParams()
    let post = posts.find((p) => {
        return p.id == postId
    })
    if (post != undefined || null) {
        return (
            <>
                <div style={{ backgroundColor: "gray", padding: "20px", margin: "20px", textAlign: "center" }}>
                    <h1 style={{ margin: "20px auto", width: "fit-content", backgroundColor: "blue" }}>{post.title}</h1>
                    <h1 style={{ margin: "20px auto", width: "fit-content", backgroundColor: "green" }}>{post.body}</h1>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <NotFound />
            </>
        )
    }
}