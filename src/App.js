import './App.css';
import React from 'react';
import Movies from './Movies';
import Database from './Database';
import Filter from './Filter';

class App extends React.Component
{
  state = {
    Database: Database
  }
  // --- reset ---
  reset()
  {
    this.setState({
      Database: []
    })
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

  searchByTitle(searchTerm)
  {
    this.setState({
      Database: Database.filter(item => item.title.includes(searchTerm.toLowerCase()))
    })
  }


  // --- render ---
  render()
  {
    return (
      <div className="App">
        <h1>The Best Movies of All Times</h1>
        <Filter>searchFunc={e => this.searchByTitle(e)} searchByTitle={e => this.searchByTitle(e)}</Filter>
        <Movies data={Database}></Movies>
        {this.state.Database.length === 0 && <p classname="noResult">No movies found!</p>}

      </div >
    );
  }
}


export default App;
