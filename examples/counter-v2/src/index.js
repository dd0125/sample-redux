import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import CounterView from './components/CounterView'
import {Counter} from './reducers/counter'

const counterStore1 = createStore(Counter.state1)
const counterStore2 = createStore(Counter.state2)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <div>
    <div>Counter v2</div>
    <CounterView
      value={counterStore1.getState()}
      onIncrement={() => counterStore1.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => counterStore1.dispatch({ type: 'DECREMENT' })}
    />
    <CounterView
      value={counterStore2.getState()}
      onIncrement={() => counterStore2.dispatch({type: '', value: 10})}
      onDecrement={() => counterStore2.dispatch({type: '', value: 20})}
    />
  </div>,
  rootEl
)

render()
counterStore1.subscribe(render)
counterStore2.subscribe(render)
