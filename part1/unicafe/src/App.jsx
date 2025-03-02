import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const totalComents = props.good.goodValue + props.neutral.neutralValue + props.bad.badValue;
  const averageComents = (props.good.goodValue*1 + props.neutral.neutralValue*0 + props.bad.badValue*-1)/totalComents;
  const positivePercentage = props.good.goodValue/totalComents*100 + " %";
  if (totalComents === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value ={props.good.goodValue} />
      <StatisticLine text="neutral" value ={props.neutral.neutralValue} />
      <StatisticLine text="bad" value ={props.bad.badValue} />
      <StatisticLine text="all" value ={totalComents} />
      <StatisticLine text="average" value ={averageComents} />
      <StatisticLine text="positive" value ={positivePercentage} />
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={{goodValue: good, goodText:"good"}} neutral={{neutralValue: neutral, neutralText:"neutral"}} bad={{badValue: bad, badText:"bad"}}/>
    </div>
  )
}

export default App