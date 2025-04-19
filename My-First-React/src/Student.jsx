
function Student({
    name = "Guest",
    age="18"
})
{
return(
    <div className="student">
        <p>
            Name:{name}
        </p>
        <p> Age: {age}</p>
    </div>
);
}
export default Student