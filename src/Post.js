// يتم استقبال البروبس هنا ك بارمتر واحد فقط
// يعني لو ارسلت من هناك 10 بروبس سيتم استقبالها هنا ك اوبجكت

// اوبجكت ديستركشر
// هو تستخرج الاشياء اللي داخل الاوبكت ك متغيرات من البارمتر على طول
export default function Post({ title, body, content }) {
    return (
        <>
            <div style={{ border: "2px solid #607D8B", padding: "15px", textAlign: "center", marginBottom: "10px", width: "70%", margin: "10px auto" }}>
                <h1>{title}</h1>
                <hr />
                <h3>{body}</h3>
                <hr />
                <div>{content}</div>
            </div>
        </>
    )
}