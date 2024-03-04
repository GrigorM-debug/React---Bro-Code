function Fruit(){
    const fruits = ['bannana', 'apple', 'orange', 'raspberry'];

    /*const listItems = [];
    using for loop to create new array which contains elements from
    fruits array but like list items
    for(let i = 0; i < fruits.length; i++){
        listItems.push(<li>{fruits[i]}</li>);
    }*/

    /*create new array which contains elements from
    fruits array but like list items but using .map function
    and also sort the fruits array in alphabetical order*/
    fruits.sort((a, b) => a.localeCompare(b));
    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return (
        <ol>{listItems}</ol>
    );
}

export default Fruit;