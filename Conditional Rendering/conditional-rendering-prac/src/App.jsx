import UserGreeting from "./UserGreeting.jsx"

function App() {
  return(
    <>
      <UserGreeting name='Ivan' isLogged={true}></UserGreeting>
      <UserGreeting name='Gosho' isLogged={false}></UserGreeting>
    </>
  );
}

export default App
