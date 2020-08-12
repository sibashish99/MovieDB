import React from 'react';
import Fade from "react-reveal/Fade";

const ShowMovie = ({ movieInfo, handleFloatButton }) => {
  const addDefault = (e) => {
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  }

  let {
    Title, 
    Year, 
    Rated, 
    Released, 
    Runtime, 
    Genre,
    Poster, 
    Director,
    Writer,
    Actors,
    Plot,
    Awards,
    imdbRating,
    BoxOffice,
    Production
  } = movieInfo;
  return (
    <section>
      <Fade>
        <div className="jumbotron">
          <div className="container">
            <div className="grid">
              <div className="grid__image">
              <img src={Poster} alt={Title} onError={addDefault} />
            </div>
            <div className="grid__content">
              <h3>{Title} ({Year})</h3>
              <p><b>Released:</b> {Released}</p>
              <p><b>Runtime:</b> {Runtime}</p>
              <p><b>Genre:</b> {Genre}</p>
              <p><b>Rated:</b> {Rated}</p>
              <p><b>Actors:</b> {Actors}</p>
              <p><b>Director:</b> {Director}</p>
              <p><b>Writer:</b> {Writer}</p>
              <p><b>Box Office:</b> {BoxOffice}</p>
              <p><b>Production:</b> {Production}</p>
              <p><b>Awards:</b> {Awards}</p>
              <p><b>IMDb Rating:</b> {imdbRating}</p>
            </div>
              <p className='grid__overview'><b>Overiew:</b> {Plot}</p>
            </div>
          </div>
        </div>
      </Fade>
      <button onClick={handleFloatButton} className='btn-float'>
        <i className="fa fa-chevron-left"></i>
      </button>
    </section>
  );
}

export default ShowMovie;