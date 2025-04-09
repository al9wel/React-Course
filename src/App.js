
import Post from "./Post";

function App() {
  return (
    <>
      {/* يتم ارسال البروبس عبر الاتربيوت اي كوستم اتربيوت تعمله يتم ارساله ك بروبس */}
      <Post title="Salem" body="hi" content="salem alswil" />
      <Post body="hi" />
      <Post title="salem" />
      {/*  ارسال ك بروبس jsx */}
      <Post>
        <button>hi</button>
        <button>hello</button>
      </Post>
      <Post>
        <Post title="Salem" body="hi" content="salem alswil" />
      </Post>
    </>
  );
}
export default App;
