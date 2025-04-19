import PropTypes from 'prop-types';

function List({category="category",
    items=[]}){

        //Default Props will not work on React 17+ with ES6+ syntax use in function parameters
//  const category=props.category;   
// const itemList = props.items;
const Listitem = items.map(item => <li key = {item.id}>
    {item.name}: &nbsp;
    {item.calories}    
</li>)

    return(
        <>
        <h2 className="category">{category}</h2>
        <h4 className="listitem">{Listitem}</h4>        
        </>
    );
}

List.PropTypes ={
    category:PropTypes.string,
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            calories:PropTypes.number.isRequired
 })
)
}
export default List