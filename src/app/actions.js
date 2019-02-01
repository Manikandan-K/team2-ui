export const SELECT_SHOW = 'SELECT_SHOW';

const selectShowAction = (data) => ({
    type: SELECT_SHOW,
    payload: data,
});

const selectShow = (show) => {
    return async (dispatch) => {
        dispatch(selectShowAction(show));
    }
};

export default selectShow;
