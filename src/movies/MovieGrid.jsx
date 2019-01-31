import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { connect } from 'react-redux';
import fetchMovies from './actions';
import './MovieGrid.css';

class MovieGrid extends Component {

  componentDidMount() {
    if(this.props.location && !this.props.movies.fetching){
      this.props.fetchMovies();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.props.location && !this.props.movies.fetching && prevProps.location != this.props.location){
      this.props.fetchMovies();
    }
  }

  render() {
    if(this.props.movies.fetching) {
      return this.showProgress()
    }

    return this.props.movies.error || false ? this.showError() : this.showMovies();
  }

  showMovies() {
    return (
      <div className='movie-items-container row'>
        {this.props.movies.items.map(({ name, slug, experiences, language }) => (
          <MovieItem key={name} name={name} slug={slug} experiences={experiences} language={language} />
        ))}
        { this.props.movies.items.length == 0 &&
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
    fetchMovies: () => dispatch(fetchMovies(ownProps.type, ownProps.location, ownProps.languages))
  }))(MovieGrid);
