import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercises = [
    {exercisesNumber: exercises1, exerciseTitle: part1}, 
    {exercisesNumber: exercises2, exerciseTitle: part2}, 
    {exercisesNumber: exercises3, exerciseTitle: part3}
  ]

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App