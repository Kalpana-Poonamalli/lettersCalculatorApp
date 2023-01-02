// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  lettersCount = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="lc-container">
        <div className="lc-inner-container">
          <h1 className="lc-heading">Calculate the Letters you enter</h1>
          <div className="input-phrase-container">
            <label className="label" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              type="text"
              onChange={this.lettersCount}
              placeholder="Enter the phrase"
              className="lc-input"
              value={searchInput}
              id="phraseText"
            />
          </div>
          <p className="lc-count">No.of letters: {searchInput.length}</p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="lc-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
