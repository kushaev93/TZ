import {
  GET_DATA_STARTED,
  GET_DATA_FAILED,
  GET_DATA_SUCCESSED,
  url
} from "./constants";
import axios from "axios";

export const Fetching = () => dispatch => {
  dispatch({ type: GET_DATA_STARTED });
  axios
  .get(`${url + 'api/children'}`)
    
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: GET_DATA_SUCCESSED,
          payload: res.data.rows,
          total: res.data.meta.total
        });
      }
    })
    .catch(err => dispatch => {
      dispatch({
        type: GET_DATA_FAILED,
        payload: err.message
      });
    });

  return {
    type: GET_DATA_STARTED
  };
};
