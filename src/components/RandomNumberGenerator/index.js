// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count">Random Number</h1>
          <p className="number-category">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onIncrement}
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
