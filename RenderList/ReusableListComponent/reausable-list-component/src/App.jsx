import List from './List.jsx';

function App() {
    const fruits = [
      {id: 1, name: "bannana", calories: 100},
      {id: 2, name: "apple", calories: 40},
      {id: 3, name: "pineapple", calories: 200},
      {id: 4, name: "orange", calories: 60},
      {id: 5, name: "melon", calories: 30}
    ];

    const vegetables = [
      {id: 6, name: "spinach", calories: 200},
      {id: 7, name: "cucumber", calories: 50},
      {id: 8, name: "cabbage", calories: 400},
      {id: 9, name: "tomato", calories: 20},
      {id: 10, name: "potato", calories: 10}
    ];

    const meats = [
      {id: 11, name: "beaf", calories: 240},
      {id: 12, name: "pork", calories: 1000},
      {id: 13, name: "chicken", calories: 600},
      {id: 14, name: "rabbit", calories: 500},
      {id: 15, name: "mouse", calories: 500}
    ];

  return(
    <>
      {fruits.length > 0 ? < List items={fruits} category="Fruits"/> : null}
      {vegetables.length > 0 ? <List items ={vegetables} category="Vegetables"/> : null}
      {meats.length > 0 ? <List items ={meats} category="Meats"/> : null}
    </>
  )
}

export default App
