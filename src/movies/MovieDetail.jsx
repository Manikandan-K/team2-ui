import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
    }

    onBookNowClick() {
        const movieId = this.props.movie.id;
        this.props.navigateToShows(movieId);
    }

    render () {
        const {movie} = this.props;
        const imageUrl = `https://img.spicinemas.in/resources/images/movies/${movie.slug}/1000x320.jpg`;

        return (
            <div classNam="container">
                <h2 className="movie-title">{movie.name} <span className="language">({movie.language})</span></h2>

                <div className="banner">
                    <img className='movie-item-image' alt={movie.name} src={imageUrl} />
                </div>

                <div className="row">
                    <div className="col-sm-12 text-right">
                        <button className="btn btn-primary book-btn" onClick={this.onBookNowClick.bind(this)}>Book Now</button>
                    </div>
                </div>

                <div className="row" >
                    <div className="col-sm-12" >
                        <div className="section">
                            <span className="section-title">
                                Synopsis
                            </span>
                            <span>
                                {movie.synopsis?movie.synopsis:'--'}
                            </span>
                        </div>
                    </div>

                    <div className="col-sm-12" >
                        <div className="section">
                            <span className="section-title">
                                Crew
                            </span>
                            <span>
                                {movie.crew?movie.crew:'--'}
                            </span>
                        </div>
                    </div>

                    <div className="col-sm-12" >
                        <div className="section">
                            <span className="section-title">
                                Cast
                            </span>
                            <span>
                                {movie.cast?movie.cast:'--'}
                            </span>
                        </div>
                    </div>

                    <div className="col-sm-12" >
                        <div className="section">
                            <span className="section-title">
                                Runtime
                            </span>
                            <span>
                                {movie.runtime?movie.runtime + ' Minutes':'--'}
                            </span>
                        </div>
                    </div>
                </div>
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