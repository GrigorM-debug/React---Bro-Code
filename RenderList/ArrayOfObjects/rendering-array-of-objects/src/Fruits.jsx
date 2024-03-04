function Fruits(){
    const fruits = [
        {id: 1, name: "bannana", calories: 100},
        {id: 2, name: "apple", calories: 40},
        {id: 3, name: "pineapple", calories: 200},
        {id: 4, name: "orange", calories: 60},
        {id: 5, name: "melon", calories: 30}
    ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a, b) => b.name.localeCompare(a.name));
    // fruits.sort((a, b) => a.calories - b.calories);
    fruits.sort((a, b) => b.calories - a.calories);

    // const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalorieFruits = fruits.filter(fruit => fruit.calories > 100);

    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b> calories</li>);

    // const listOfLowCaloriesFruits = lowCalorieFruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories} calories</li>)
    const listOfHighCalorieFruits = highCalorieFruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories} calories</li>);
    
    return(
        <ul>{listOfHighCalorieFruits}</ul>
    )
}

export default Fruits;