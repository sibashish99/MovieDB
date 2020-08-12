import React from 'react';
import Fade from "react-reveal/Fade";

function MovieItem({title, year, showMovie, poster}) {
  const addDefault = (e) => {
    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
  }
  
  return (
    <Fade>
      <div id="card" className="card__group--card">
        <div className="card-view">
          <img
            src={poster}
            className="card-img"
            onError={addDefault}
            alt={title}
          />
        </div>
        <div className="card-body">
          <h4>{title}</h4>
          <p>{year}</p>
          <button onClick={showMovie}>View</button>
        </div>
      </div>
    </Fade>
  );
}

export default MovieItem;