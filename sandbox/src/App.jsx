const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you're {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const peepos = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <h1>Greetings</h1>
      <p>{peepos[0].name}, {peepos[0].age}</p>
      <p>{peepos[1].name}, {peepos[1].age}</p>
    </div>
  )
}

export default App