export const SELECT_SHOW = 'SELECT_SHOW';

const selectShowAction = (data) => ({
    type: SELECT_SHOW,
    payload: data,
});

const selectShow = (show, tickets, showDate) => {
    return async (dispatch) => {
        dispatch(selectShowAction({ show, tickets, showDate }));
    }
};

export default selectShow;
