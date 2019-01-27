
import fetchMovies, { NOW_SHOWING, FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../movies/actions';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';

const mockStore = configureMockStore([thunk])
const mock = new MockAdapter(axios);
let store;
const apiData = [{ "id": 1, "name": "Kabali", "experiences": "RDX, Dolby Atmos, SUB", "listingType": "NOW_SHOWING", "slug": "kabali" },
{ "id": 2, "name": "Sultan", "experiences": "RDX, Dolby Atmos, SUB", "listingType": "NOW_SHOWING", "slug": "sultan" }]


describe("movies/actions", () => {
  beforeEach(() => {
    store = mockStore({})
  });

  it('should fetch movies from server which are now-showing and return FETCH_MOVIES_SUCCESS', async () => {
    mock
      .onGet('http://localhost:9090/movies/now-showing')
      .reply(200, apiData);

    let expectedActions = []
    
    store.dispatch(fetchMovies()).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIES_PROGRESS });
      expect(store.getActions()[1]).toEqual({
        type: FETCH_MOVIES_SUCCESS,
        payload: apiData
      });
    });
  });

  it('should return FETCH_MOVIES_FAILURE if http 500', async () => {
    mock
      .onGet('http://localhost:9090/movies/now-showing')
      .reply(500, {});
    let expectedActions = []
    store.dispatch(fetchMovies('now-showing')).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIES_PROGRESS });
      expect(store.getActions()[1]).toEqual({ type: FETCH_MOVIES_FAILURE });
    });
  });
})
