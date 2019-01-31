import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.css';

const MovieItem = ({ name, slug, experiences }) => {
  const imageUrl = `https://img.spicinemas.in/resources/images/movies/${slug}/150x207.jpg`;
  return (
    <div className='movie-item col-md-2'>
      <img className='movie-item-image' alt={name} src={imageUrl} />
      <h5 className='movie-item-name'>{name}</h5>
      <h5 className='movie-item-experiences'>{experiences}</h5>
    </div>
  )
}

MovieItem.defaultProps = {};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default MovieItem;
