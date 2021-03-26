import './App.css';
import React from 'react';
import Movies from './Movies';
import Database from './Database';


class App extends React.Component
{
  state = {
    Database: Database
  }

  fetch()
  {
    this.setState({
      Database: Database
    })
  }

  sortAsc(e)
  {
    const order = e.target.value;

    if (order === 'asc') {
      this.setState({
        Database: Database.sort((a, b) => a.year - b.year)
      })
    }
    if (order === 'desc') {
      this.setState({
        Database: Database.sort((a, b) => b.rate - a.rate)
      })
    }
  }
  bestRate(e)
  {
    const ratings = e.target.value;

    if (ratings === 'bestRate') {
      this.setState({
        Database: Database.sort((a, b) => b.rate - a.rate)
      })
    }
    if (ratings === 'worstRate') {
      this.setState({
        Database: Database.sort((a, b) => a.rate - b.rate)
      })
    }
  }

  render()
  {
    return (
      <div className="App">
        <h1>The Best Movies of All Times</h1>
        <div className="searchDiv">
          <form>
            <button onClick={e => this.fetch()}>Load all movies!</button>
            <select onChange={e => this.sortAsc(e)}>
              <option value="asc">Older movies first</option>
              <option value="desc">Newer movies first</option>
            </select>
            <select onChange={e => this.bestRate(e)}>
              <option value="bestRate">Best movies first</option>
              <option value="worstRate">Worst movies first</option>
            </select>
            {/* <button onClick={e => this.bestRate()} className="bestRate">Best Rate</button> */}
            <button onClick={e => this.aToZ()} className="aToZ">A - Z</button>
            <button onClick={e => this.zToA()} className="zToA">Z - A</button>
          </form >
        </div>
        <Movies data={Database}></Movies>

      </div>
    );
  }
}


export default App;
