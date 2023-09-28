const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you're {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 46; 

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='Viktar' age={'X'}/>
      <Hello name='Doris' age={age+10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App