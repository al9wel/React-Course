// الكومبونت هي عباره عن مجموعه من الاكواد تقوم ب استخدامها في كل مره
// مثلا لديك هيدر تريد استخدامه في كل صفحه يكون فنكشن 
// ثم تستدعيه في كل الصفحات الخاصه بك
// الكمبوننت لازم يرجع عنصر واحد فقط
// الاتربيوت داخل العنصر اذا كانت له اكثر من قيمه نضعه على سكل اوبجكت
import "./MyComponent.css"
let style = {
    margin: "20px",
    backgroundColor: "red"
}
export default function MyComponent() {
    const a = true;
    return (
        <>
            <span style={style}>MyCompoment</span>
            <span style={{ backgroundColor: "rosybrown" }}>MyCompoment</span>
            <button onClick={ss}>MyCompoment</button>
            <button onClick={() => console.log("ss")}>MyCompoment</button>
            <h1 className={"black p"}>hi</h1>
            <h1 className={a === true ? "black p" : ""}>hi</h1>
        </>
    );
}
function ss() {
    console.log("ss");
}