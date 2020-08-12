import React, {Component} from 'react';
import '../scss/main.scss';
import { searchMovies, getMovie } from "../api/api";
import Navbar from './Navbar';
import MovieInput from './MovieInput';
import MovieList from './MovieList';
import ShowMovie from './ShowMovie';
import Footer from './Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movie: {},
      searchTerm: '',
      activePage: 1,
      showMovie: false,
      showMovies: false,
      showPlaceholder: true
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleShowMovie = this.handleShowMovie.bind(this);
    this.handleFloatButton = this.handleFloatButton.bind(this);
  }
    

  handleSearch(searchTerm, pageNumber=1) {
    searchMovies(searchTerm, pageNumber).then(data => { 
      let movies = [];
      movies = [data];
      this.setState(
        { 
          movies, 
          searchTerm, 
          activePage: pageNumber, 
          showMovie: false, 
          showMovies: true,
          showPlaceholder: false
        });
    })
    .catch(error => 
      console.log(error)
    )  
  }
  
  handleShowMovie(title, year){
    getMovie(title, year).then(data => {
      let movie = {};
      movie = {...data};
      this.setState({ movie, showMovie: true, showMovies: false });
    })
  }

  handleFloatButton() {
    this.setState({ showMovie: false, showMovies: true });
  }

  render() {
    return (
      <div className="main-container">
        <Navbar />
        <MovieInput handleSearch={this.handleSearch} />
        {this.state.showPlaceholder && (
          <div className="container">
            <h1 className="flex placeholder">Please enter a search term above...</h1>
          </div>
        )}
        {this.state.showMovies && (
          <MovieList
            movies={this.state.movies}
            handleShowMovie={this.handleShowMovie}
            handleSearch={this.handleSearch}
            searchTerm={this.state.searchTerm}
            activePage={this.state.activePage}
          />
        )}
        {this.state.showMovie && (
          <ShowMovie
            movieInfo={this.state.movie}
            handleFloatButton={this.handleFloatButton}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
