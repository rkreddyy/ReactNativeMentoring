import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    dispatch({
        type: FETCH_POSTS,
        payload: {
            "userId": 1,
            "id": 1,
            "title": "title",
            "body": "body"
          }
    });
};

export const createPost = postData => dispatch => {
    dispatch({
        type: NEW_POST,
        payload: {
            "userId": 1,
            "id": 1,
            "title": "title",
            "body": "body"
          }
    });
};