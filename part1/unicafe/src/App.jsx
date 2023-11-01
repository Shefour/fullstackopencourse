import { useState } from 'react'

const Button = ({ text, click }) => {
  return (
    <button onClick={click}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Stats = ({ good, neutral, bad }) => {
  if ((good + bad + neutral) == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine text="positive" value={(good / (good + neutral + bad)) * 100 + '%'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" click={() => setGood(good + 1)} />
      <Button text="neutral" click={() => setNeutral(neutral + 1)} />
      <Button text="bad" click={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App