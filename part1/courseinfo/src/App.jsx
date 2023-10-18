const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    console.log(props)
    return (
      <h1>
        {props.course}
      </h1>
    )
  }

  const Content = (parts) => {
    return (
      parts.forEach(element => {
        element.exercises
      })
    )
}

const Total = (parts) => {
  return (
    <div>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )

}

export default App