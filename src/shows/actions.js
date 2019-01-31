import axios from 'axios';
import { baseUrl } from '../movies/helper';

export const FETCH_SHOW_PROGRESS = 'FETCH_SHOW_PROGRESS';
export const FETCH_SHOW_SUCCESS = 'FETCH_SHOW_SUCCESS';
export const FETCH_SHOW_FAILURE = 'FETCH_SHOW_FAILURE';

const fetchShowsInProgress = {
    type: FETCH_SHOW_PROGRESS
}

const showsDataFetched = (data) => ({
    type: FETCH_SHOW_SUCCESS,
    payload: data,
});

const fetchShowsFailure = {
    type: FETCH_SHOW_FAILURE
}

const fetchShows = (movieId, locationId, showDate) => {
    return async (dispatch) => {
        try {
            dispatch(fetchShowsInProgress);
            const dateString = `${showDate.getDate()}-${showDate.getMonth() + 1}-${showDate.getFullYear()}`;
            const shows = await axios.get(`${baseUrl()}/movies/${movieId}/shows?location=${locationId}&showDate=${dateString}`);
            dispatch(showsDataFetched(shows.data));
        } catch (error) {
            dispatch(fetchShowsFailure);
        }
    }
}

export default fetchShows;