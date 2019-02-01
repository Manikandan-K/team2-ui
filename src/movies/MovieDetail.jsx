import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
    }

    onBookNowClick(movieId) {
        this.props.navigateToShows(movieId);
    }

    render () {
        const {movie} = this.props;
        const imageUrl = `https://img.spicinemas.in/resources/images/movies/${movie.slug}/1000x320.jpg`;

        return (
            <div>
                <h2 className="movie-title">{movie.name}</h2>

                <div className="banner">
                    <img className='movie-item-image' alt={movie.name} src={imageUrl} />
                </div>

                <button onClick={this.onBookNowClick.bind(this)}>Book Now</button>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        movie: state.app.movie
    }),
    (dispatch, ownProps) => ({
        navigateToShows: (movieId) => dispatch(push(`/movies/${movieId}/shows`))
    }))(MovieDetail);