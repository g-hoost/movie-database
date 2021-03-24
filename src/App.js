import './App.css';
import Movies from './Movies';
import Database from './Database';
// import Searchbar from './Searchbar';

function App()
{
  return (
    <div className="App">
      <h1>The 100 best Movies Ever</h1>
      <Movies data={Database}></Movies>
      {/* <Searchbar></Searchbar> */}
    </div>
  );
}

export default App;
