import { useState } from 'react'

// const Display = ({ counter }) => <div>{counter}</div>

const Button = (props) => {
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

const App = () => {
  const [value, setValue] = useState(10)

  // const setToValue = (newValue) => {
  //   console.log('value now', newValue)
  //   setValue(newValue)
  // }
  const setToValue = (newValue) => () => {
      setValue(newValue)
    }

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>
        thousand
      </button>
      <button onClick={setToValue(0)}>
        reset
      </button>
      <button onClick={setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
}

export default App