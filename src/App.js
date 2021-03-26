import './App.css';
import React from 'react';
import Movies from './Movies';
import Database from './Database';

class App extends React.Component
{
  state = {
    Database: Database
  }
  // --- fetch ---
  fetch()
  {
    this.setState({
      Database: Database
    })
  }
  // --- Sort by year ---
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
  // --- Sort by rating ---
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
  // --- Sort alphabetically ---
  sortAlphabetically(e)
  {
    const sortAlph = e.target.value;

    if (sortAlph === 'sortIt') {
      this.setState({
        Database: Database.sort((a, b) => a.title > b.title ? 1 : -1)
      })
    }
    if (sortAlph === 'sortReverse') {
      this.setState({
        Database: Database.sort((a, b) => a.title < b.title ? 1 : -1)
      })
    }
  }
  // --- Search Bar ---

  searchFunc(search)
  {
    this.setState({
      Database: Database.filter((Database => Database.title.toLowerCase()includes(search.toLowerCase())),
    })
  }


  // --- render ---
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
            <select onChange={e => this.sortAlphabetically(e)}>
              <option value="sortIt">A - Z</option>
              <option value="sortReverse">Z - A</option>
            </select>
            <input onChange={e => this.enterSearchText(e)}
              type="text"
              id="search"
              placeholder="search movie database"
              name="search"
            />
            <input onClick={() => this.searchFunc} type="submit">🔍</input>
          </form >
        </div>
        <Movies data={Database}></Movies>

      </div >
    );
  }
}


export default App;
