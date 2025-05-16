import { Outlet } from "react-router-dom"
export default function PostsLayout() {
    return (
        <>
            <div >
                <h1 style={{ color: "cornflowerblue" }}>POSTS</h1>
                <Outlet />
            </div>
        </>
    )
}