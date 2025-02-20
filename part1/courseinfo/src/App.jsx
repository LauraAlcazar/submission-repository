import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack application development'
  /*const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }*/
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
  /*const exercises = [
    {exercisesNumber: part1.exercises, exerciseTitle: part1.name}, 
    {exercisesNumber: part2.exercises, exerciseTitle: part2.name}, 
    {exercisesNumber: part3.exercises, exerciseTitle: part3.name}
  ]*/

  return (
    <div>
      <Header course={course} />
      <Content exercises={parts} />
      <Total exercises={parts} />
    </div>
  )
}

export default App