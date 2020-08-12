import React, { Component } from 'react';

class MovieInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <div className="container__margin flex">
                <input
                  type="text"
                  value={this.state.input}
                  autoComplete="off"
                  placeholder="Search"
                  onChange={this.handleChange}
                  className="search"
                  required
                />
              <button type="submit" className="iconbox">
                <span className="iconbox__icon">
                  <i className="fa fa-search" />
                </span>
              </button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default MovieInput;