import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../app/rootReducer';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Shows from './Shows';

const localStorageMock = (() => {
    let store = {}
    return {
        getItem(key) {
            return store[key]
        },
        setItem(key, value) {
            store[key] = value.toString()
        },
        clear() {
            store = {}
        }
    };
})()

global.localStorage = localStorageMock

let store;
const renderWithRedux = (ui) => (
    render(
        <Provider store={store} >
            {ui}
        </Provider>)
);

describe('Shows component', () => {
    beforeEach(() => {
        store = createStore(rootReducer, {}, applyMiddleware(thunk));
    });

    afterEach(cleanup);

    it('should render the 7 days from today', () => {
        const { container } = renderWithRedux(<Shows match={{ params: { id: 1 } }} />);
        const selectDates = container.querySelector('.show-select-dates');
        expect(selectDates).toBeDefined();
        expect(selectDates.children.length).toBe(7);
    });

    it('should select today\'s date by default', () => {
        const { container } = renderWithRedux(<Shows match={{ params: { id: 1 } }} />);
        const selectDates = container.querySelector('.show-select-dates');
        expect(selectDates.children[0].className).toBe('show-date active');
    });

    it('should change the date on click', () => {
        const { container } = renderWithRedux(<Shows match={{ params: { id: 1 } }} />);
        const selectDates = container.querySelector('.show-select-dates');
        const showDateElement = selectDates.children[3];
        fireEvent.click(showDateElement);
        expect(showDateElement.className).toBe('show-date active');
        expect(selectDates.children[0].className).toBe('show-date');
    });

    it('should render tickets dropdown with max 8 tickets', () => {
        const { container } = renderWithRedux(<Shows match={{ params: { id: 1 } }} />);
        const ticketsDropdown = container.querySelector('.show-select-tickets');
        expect(ticketsDropdown).not.toBeNull();
        expect(ticketsDropdown.children.length).toBe(8);
        expect(ticketsDropdown.children[7].innerHTML).toBe('8');
    })
});