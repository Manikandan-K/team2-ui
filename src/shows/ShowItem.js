import React from 'react';
import PropTypes from 'prop-types';
import './ShowItem.css';
import moment from 'moment';

const ShowItem = ({ id, movieName, cinema, experience, showTime, header = false, action }) => {
    let showTimeEl = showTime;

    if (!header) {
        showTimeEl = <button className='showtime-btn'>{showTime}</button>;
    }
    return (
        <div className={header?'show-item-header':'show-item'} onClick={() => !header && action({ id, movieName, cinema, experience, showTime })}>
            <div className='show-item-movie'>{movieName}</div>
            <div className='show-item-cinema'>{cinema}</div>
            <div className='show-item-experience'>{experience}</div>
            <div className='show-item-showtime'>{showTimeEl}</div>
        </div>
    );
}

ShowItem.defaultProps = {};

ShowItem.propTypes = {
    movieName: PropTypes.string.isRequired,
    cinema: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    showTime: PropTypes.string.isRequired,
}

export default ShowItem;