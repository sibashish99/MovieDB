import React from 'react';
import MovieItem from './MovieItem';
import Pagination from "react-js-pagination";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MovieList = ({handleShowMovie, movies, handleSearch, activePage, searchTerm}) => {
    var ShowList = movies[0].response;
    var MovieItems = ShowList === 'True' && movies[0].search.map((m, idx) => (
      <MovieItem
        key={m.imdbID + idx}
        title={m.Title}
        year={m.Year}
        poster={m.Poster}
        showMovie={handleShowMovie.bind(this, m.Title, m.Year)}
      />
    ))

    function handlePageChange(pageNumber) {
      handleSearch(searchTerm, pageNumber);
    }

    return (
      <section>
        {ShowList === "True" ? (
          <div>
            <div className="container">
              <div className="card">
                <div className="card__group">{MovieItems}</div>
              </div>
              <Pagination
                hideDisabled
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={movies[0].totalResults}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
              />
            </div>
            <AnchorLink href="#pageTop" className="btn-float">
              <i className="fa fa-chevron-up" />
            </AnchorLink>
          </div>
        ) : (
          <div className="container">
            <h1 className="flex">Oops, {movies[0].search}</h1>
          </div>
        )}
      </section>
    );
}

export default MovieList;