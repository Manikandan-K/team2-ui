import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import axios from 'axios';
import fetchShows, { FETCH_SHOW_PROGRESS, FETCH_SHOW_SUCCESS, FETCH_SHOW_FAILURE } from './actions';

const mockStore = configureMockStore([thunk])
const mock = new MockAdapter(axios);
let store;
const apiData = [];

describe('shows/actions', () => {
    beforeEach(() => {
        store = mockStore({})
    });

    it('should fetch shows for movies and FETCH_SHOWS_SUCCESS', () => {
        mock
            .onGet('http://localhost:9090/movies/1/shows?location=1&showDate=4-2-2019')
            .reply(200, apiData);

        store.dispatch(fetchShows(1, 1, new Date(2019, 1, 4))).then(() => {
            expect(store.getActions()[0]).toEqual({ type: FETCH_SHOW_PROGRESS });

            expect(store.getActions()[1]).toEqual({
                type: FETCH_SHOW_SUCCESS,
                payload: apiData
            });
        });
    });

    it('should return FETCH_SHOW_FAILURE if http 500', async () => {
        mock
            .onGet('http://localhost:9090/movies/1/shows?location=1&showDate=4-2-2019')
            .reply(500, {});

        store.dispatch(fetchShows(1, 1, new Date(2019, 1, 4))).then(() => {
            expect(store.getActions()[0]).toEqual({ type: FETCH_SHOW_PROGRESS });
            expect(store.getActions()[1]).toEqual({ type: FETCH_SHOW_FAILURE });
        });
    });
});