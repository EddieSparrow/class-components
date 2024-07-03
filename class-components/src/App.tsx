import './App.css';
import { ChangeEvent, Component } from 'react';

class App extends Component {
  state = {
    input: localStorage.getItem('input') || '',
  };

  handleSubmit = async () => {
    const { input } = this.state;
    const inputValue = input;
    localStorage.setItem('input', inputValue);
    try {
      const result = await getValue(inputValue);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
    async function getValue(inputValue: string) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`, {
        method: 'GET',
      });
      return res.json();
    }
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toString();
    this.setState({ input: inputValue });
    // localStorage.setItem('input', inputValue);
  };

  render() {
    const { input } = this.state;

    return (
      <>
        <div className="container">
          <div className="search">
            <input className="search-input" typeof="search-input" value={input} onChange={this.handleInputChange}></input>
            <button className="search-button" onClick={this.handleSubmit}>
              Search
            </button>
          </div>
          <div className="results"></div>
        </div>
      </>
    );
  }
}

export default App;
