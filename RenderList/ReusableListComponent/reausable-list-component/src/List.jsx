import PropTypes from 'prop-types';

function List(props){
    const items = props.items;
    const category = props.category;

    const listItems = items.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories} calories</b></li>)

    return(
        <>
            <h3 class="list-heading">{category}</h3>
            <ul class="list-items">
                {listItems}
            </ul>
        </>
    );
}
List.defaultProps = {
    category: "Category",
    items: [],
}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number}, {name: PropTypes.string}, {calories: PropTypes.number}))
}
export default List;