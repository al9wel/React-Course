// import satate
import { useState } from "react"
export default function MyButton() {
    // هنا نستدعي اليوز ستاتيت
    // ترجع لي مصفوفه من عنصرين العنصر الاول سترينق وهو العنصر الخاص ب القراءه
    // العنصر الثاني هو فنكشن وهو العنصر الخاص ب الكتابه اي تعديل القيمه
    // اول بارمتر نعطيها القيمه الافتراضيه للمتغير هنا ستكون سالم
    // ##################
    // الطريقه العاديه 
    // const state = useState("Salem");
    // لقراءه الحاله
    // const name = state[0];
    // لتغيير الحاله
    // const setName = state[1];
    // #################
    // ألطريقه المختصره
    const [name, setName] = useState("Salem")
    // #################
    // عند الضغط على الزر نقوم ب تغيير الحاله
    const changeName = () => {
        if (name === "Salem") {
            setName("ahmed")
        }
        else {
            setName("Salem")
        }
    }
    return (
        <>
            <button onClick={changeName}>Click Me</button>
            <h4>{name}</h4>
        </>
    )
}