const Course = ({course}) => {
    return (
      <div>
        <Header coursename={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  const Header = ({coursename}) => {
    return (
      <h2>{coursename}</h2>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  const Part = ({part}) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Total = ({parts}) => {
    const totalparts = parts.reduce((sum, part) => sum + part.exercises, 0)
    console.log(totalparts)
    return (
      <p><b>total of {totalparts} exercises</b></p>
    )
  }

  export default Course