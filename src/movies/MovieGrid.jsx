import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { connect } from 'react-redux';
import fetchMovies from './actions';
import { push } from 'react-router-redux';
import './MovieGrid.css';

class MovieGrid extends Component {

  componentDidMount() {
    if (this.props.location && !this.props.movies.fetching) {
      this.props.fetchMovies();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location && !this.props.movies.fetching && prevProps.location != this.props.location) {
      this.props.fetchMovies();
    }
  }

  render() {
    if (this.props.movies.fetching) {
      return this.showProgress()
    }

    return this.props.movies.error || false ? this.showError() : this.showMovies();
  }

  onMovieItemClick(movieId) {
    this.props.navigateToShows(movieId);
  }

  showMovies() {
    return (
      <div className='movie-items-container row'>
        {this.props.movies.items.map(({ id, name, slug, experiences, language }) => (
          <MovieItem id={id} key={name} name={name} slug={slug} experiences={experiences} action={this.onMovieItemClick.bind(this)} language={language} />

        ))}
        {this.props.movies.items.length == 0 &&
          <label className="no-show-message">Sorry, No shows available for this.</label>
        }
      </div>
    );
  }

  showProgress() {
    return (
      <div>Loading...</div>
    );
  }

  showError() {
    return (
      <div>Error...</div>
    );
  }
}

MovieGrid.defaultProps = {
  movies: {
    items: []
  },
};

MovieGrid.propTypes = {
  movies: PropTypes.shape({
    items: PropTypes.array,
  }),
};

export default connect(
  (state) => ({
    movies: state.movies
  }),
  (dispatch, ownProps) => ({
    fetchMovies: () => dispatch(fetchMovies(ownProps.type, ownProps.location, ownProps.languages)),
    navigateToShows: (movieId) => dispatch(push(`/movies/${movieId}/shows`))
  }))(MovieGrid);
