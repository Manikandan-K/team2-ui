import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchShows from './actions';
import { push } from 'react-router-redux';
import selectShow from '../app/actions';
import './Shows.css';
import ShowItem from './ShowItem';

class Shows extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDate: new Date(),
            tickets: 1
        }

        this.locationId = localStorage.getItem('just-cinema-user-location');
        this.movieId = props.match.params.movieId;
    }

    componentDidMount() {
        const { selectedDate } = this.state;
        this.props.fetchShows(this.movieId, this.locationId, selectedDate);
    }

    onDateChange(showDate) {
        this.setState({ selectedDate: showDate });
        this.props.fetchShows(this.movieId, this.locationId, showDate);
    }

    renderTickets() {
        let mappedOptions = [];
        for (let index = 1; index < 9; index++) {
            mappedOptions.push(<option value={index} key={`show-ticket-${index}`}>{index}</option>);
        }
        return (
            <select value={this.state.tickets} onChange={(event) => this.setState({ tickets: event.target.value })} className='show-select-tickets'>
                {
                    mappedOptions
                }
            </select>
        )
    }
    renderDates() {
        let mappedDates = [];
        let selectedDay = this.state.selectedDate.getDate();

        for (let index = 0; index < 7; index++) {
            let showDate = new Date();
            showDate.setDate(showDate.getDate() + index);
            mappedDates.push(
                <div key={`show-date-${index}`} className={selectedDay === showDate.getDate() ? 'show-date active' : 'show-date'}
                    onClick={() => this.onDateChange(showDate)} >
                    {
                        showDate.getDate()
                    }
                </div>
            );
        }

        return mappedDates;
    }

    selectShow(show) {
        const { tickets } = this.state;
        const { navigateToBooking, selectMovieShow } = this.props;
        selectMovieShow(show);
        navigateToBooking(show.id, tickets);
    }

    renderShows() {
        const { shows } = this.props;
        return (
            <div>
                <ShowItem movieName="MOVIE" cinema="CINEMA" experience="EXPERIENCE" showTime="SHOWTIME" header={true} />
                {
                    shows.map((show, index) => (
                        <ShowItem key={`show-item-${index}`} id={show.id} movieName={show.movieName} cinema={show.screenName}
                            experience={show.experiences} showTime={show.showTime} action={this.selectShow.bind(this)} />
                    ))
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className='show-header'>
                    <div className='show-tickets'>
                        <div>Tickets</div>
                        {
                            this.renderTickets()
                        }
                    </div>
                    <div className='show-dates'>
                        <div>Date</div>
                        <div className='show-select-dates'>
                            {
                                this.renderDates()
                            }
                        </div>
                    </div>
                </div>

                <div>
                    {
                        this.renderShows()
                    }
                </div>
            </div>
        )
    }
}


Shows.defaultProps = {
    shows: [],
    locations: []
};

Shows.propTypes = {
    shows: PropTypes.array
};

export default connect(
    (state) => ({
        shows: state.shows.items
    }),
    (dispatch) => ({
        fetchShows: (movieId, locationId, showDate) => dispatch(fetchShows(movieId, locationId, showDate)),
        selectMovieShow: (show) => dispatch(selectShow(show)),
        navigateToBooking: (showId, tickets) => dispatch(push(`/shows/${showId}/booking?tickets=${tickets}`))
    }))(Shows);