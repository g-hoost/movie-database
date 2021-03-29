import './App.css';

function Filter(props)
{

  return (
    <div className="searchDiv">
      <form>
        <button onClick={e => this.fetch()}>Load all movies!</button>
        <button onClick={e => this.reset()}>Reset</button>
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
        <input
          type="search" onInput={e => this.searchFunc(e.target.value)}
          id="search"
          placeholder="search movie database"
          name="search"
        />
        <button onClick={() => this.searchFunc} type="submit">🔍</button>
      </form >
    </div>
  );
}

export default Filter;

