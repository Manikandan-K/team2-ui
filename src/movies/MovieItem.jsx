import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.css';

const MovieItem = ({ id, name, slug, experiences, action }) => {
  const imageUrl = `https://img.spicinemas.in/resources/images/movies/${slug}/150x207.jpg`;
  return (
    <div className='movie-item col-md-2 col-sm-6' onClick={() => action(id)}>
      <img className='movie-item-image' alt={name} src={imageUrl} />
      <h5 className='movie-item-name'>{name}</h5>
      <h5 className='movie-item-experiences'>{experiences}</h5>
    </div>
  )
}

MovieItem.defaultProps = {};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default MovieItem;
