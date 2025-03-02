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
  return (
    <div>
      <h1>statistics</h1>
      <p>{props.good.goodText} {props.good.goodValue}</p>
      <p>{props.neutral.neutralText} {props.neutral.neutralValue}</p>
      <p>{props.bad.badText} {props.bad.badValue}</p>
      <p>all {totalComents}</p>
      <p>average {averageComents}</p>
      <p>positive {positivePercentage}</p>
    </div>
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