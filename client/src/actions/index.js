import streams from '../apis/streams';
import history from '../history';

export const SIGN_IN = 'sign_in';
export const SIGN_OUT = 'sign_out';
export const CREATE_STREAM = 'create_stream';
export const FETCH_STREAM = 'fetch_stream';
export const FETCH_STREAMS = 'fetch_streams';
export const DELETE_STREAM = 'delete_stream';
export const EDIT_STREAM = 'EDIT_stream';


export const SignIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const SignOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: response.data});
    history.push('/');

}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data});
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data});
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id});
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data});
    history.push('/');
}