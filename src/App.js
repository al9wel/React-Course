
import Post from "./Post";
const data = [
  {
    id: 1,
    title: "one",
    body: "one",
    content: "one"
  },
  {
    id: 2,
    title: "two",
    body: "two",
    content: "two"
  }, {
    id: 3,
    title: "three",
    body: "three",
    content: "three"
  },
]
function App() {
  // هنا نعمل ماب لمصفوفه البيانات ونحولها الى مصفوفه عناصر جاهزه
  let content = data.map((post) => {
    return (
      <Post key={post.id} title={post.title} body={post.body} content={post.content} />
    )
  })
  return (
    <>
      {content}
    </>
  );
}
export default App;
