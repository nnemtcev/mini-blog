import jsonPlaceholder from '../apis/jsonPlaceholder';

// This would not work!!! If you transpile this code, you'll see that a request object can be returned.
export const fetchPosts = async () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};

export const fetchUsers = () => {
  return {
    type: 'FETCH_USERS',
  };
};