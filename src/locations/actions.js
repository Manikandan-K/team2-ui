import axios from 'axios';
import changeCase from 'change-case';
import slug from 'slug';
import {baseUrl} from "./helper";

export const FETCH_LOCATIONS_PROGRESS = 'FETCH_LOCATIONS_PROGRESS';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE';

const LocationDataFetched = (data) => ({
  type: FETCH_LOCATIONS_SUCCESS,
  payload: data,
});

const fetchLocationsInProgress = {
  type: FETCH_LOCATIONS_PROGRESS
}

const LocationDataFetchFailure = {
  type: FETCH_LOCATIONS_FAILURE,
};


const fetchLocations = () => {
  return async (dispatch) => {
    dispatch(fetchLocationsInProgress);
    try {
      const locations = await axios.get(`${baseUrl()}/locations`)

      dispatch(LocationDataFetched(locations))
    } catch(error) {
      dispatch(LocationDataFetchFailure)
    }
  }
}

export default fetchLocations;
