const MyCompoenet = ({ value1, setValue1 }) => {
    return (
        <>
            <input type="text" value={value1} onChange={(e) => { setValue1(e.target.value) }} />
        </>
    )
}
export default MyCompoenet