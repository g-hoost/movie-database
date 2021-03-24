import starFull from './star_full.svg'
import starHalf from './star_half.svg'
import starEmpty from './star_empty.svg'

function Rating(props)
{
  let stars = props.data.rate;
  let starsArr = [];
  starsArr = stars.split(".");

  let allStars = [];

  let fullStar = [];
  fullStar = starsArr[0];

  let halfStar = [];
  halfStar = starsArr[1];

  let emptyStar;



  if (halfStar === "" || halfStar <= 0 || halfStar === undefined) {
    halfStar = 0;
    emptyStar = 10 - fullStar;
  } else if (halfStar >= 1) {
    halfStar = 1;
    emptyStar = 10 - fullStar - halfStar;
  }


  for (let i = 0; i < stars; i++) {
    let myFullStar = (
      <img key={"full" + i} src={starFull} alt=""></img>
    );
    allStars.push(myFullStar);
  }


  for (let i = 1; i <= halfStar; i++) {
    let myHalfStar = (
      <img key={"half" + i} src={starHalf} alt=""></img>
    );
    allStars.push(myHalfStar);
  }

  for (let i = 0; i < emptyStar; i++) {
    let myEmptyStar = (
      <img key={"empty" + i} src={starEmpty} alt=""></img>
    );
    allStars.push(myEmptyStar);
  }

  return (
    <section className="rating">
      { allStars.map((item, index) => item)}
    </section >
  );
}

export default Rating;