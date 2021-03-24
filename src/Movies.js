import Rating from './Rating';

function Movies(props)
{

  return (
    <section className="Movies">
      {props.data.map((item, index) => (
        <div key={index} className="titles">
          <h3>{item.title}</h3>
          <div>{item.year}</div>
          <div>{item.director}</div>
          <div>{item.duration}</div>
          <div>{item.rate} of 10</div>
          <Rating data={item}></Rating>

          <div className="genres">
            {item.genre.map((genre, index) =>
            {
              return <div key={index}>
                {genre}
              </div>
            })}
          </div>

        </div>
      ))}
    </section>
  );
}

export default Movies;

