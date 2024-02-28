import Student from './Student.jsx';

function App() {
  return (
    <>
      <Student name="Ivan" age= {20} isStudent={true}></Student>
      <Student name="Iva" age={30} isStudent={false}></Student>
      <Student name='Goshko' age={10} isStudent={false}></Student>
      <Student name='Lary'></Student>
      <Student name = 'Dimitrichko' age={5}></Student>
      <Student></Student>
    </>
  )
}

export default App
