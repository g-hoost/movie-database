import './App.css';
import React from 'react';
import Movies from './Movies';
import Database from './Database';
// import { render } from "@testing-library/react";
//and TEst

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
        Database: Database.sort((a, b) => b.year - a.year)
      })
    }
  }
  sortDate()
  {

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
            {/* <button onClick={e => this.sortAsc} className="dateAsc">Sort by Date Ascending</button>
            <button className="dateDesc">Sort by Date Descending</button> */}
            <button className="bestRate">Best Rate</button>
            <button className="aToZ">A - Z</button>
            <button className="zToA">Z - A</button>
          </form >
        </div>
        <Movies data={Database}></Movies>

      </div>
    );
  }
}


export default App;
