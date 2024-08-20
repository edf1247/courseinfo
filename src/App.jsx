const App = () => {

  const course = {
    name: 'Half Stack application development',

    parts: [
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
}


  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = ({course}) => {
  
  return (
  <>
    <h1>{course}</h1>
  </>)
}

const Content = ({parts}) => {

  let part1 = parts[0];
  let part2 = parts[1];
  let part3 = parts[2];
  
  return (<div>
      <Part name={part1.name} exercise={part1.exercises} />
      <Part name={part2.name} exercise={part2.exercises} />
      <Part name={part3.name} exercise={part3.exercises} />
  </div>)
}

const Part = ({name, exercise}) => {
  return (
    <>
      <p>
        {name} {exercise}
      </p>
    </>
  );
}

const Total = ({parts}) => {
  return (<>
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  </>);
}

export default App
