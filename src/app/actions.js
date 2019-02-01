export const SELECT_SHOW = 'SELECT_SHOW';
export const SELECT_MOVIE = 'SELECT_MOVIE';

const selectShowAction = (data) => ({
    type: SELECT_SHOW,
    payload: data,
});

const selectMovieAction = (data) => ({
    type: SELECT_MOVIE,
    payload: data,
});

export const selectShow = (show, tickets, showDate) => {
    return async (dispatch) => {
        dispatch(selectShowAction({ show, tickets, showDate }));
    }
};

export const selectMovie = (movie) => {
    return async (dispatch) => {
        dispatch(selectMovieAction(movie));
    }
};
