import {
  GET_DATA_STARTED,
  GET_DATA_SUCCESSED,
  GET_DATA_FAILED
} from "../actions/constants";

const initialState = {
  isLoading: false,
  total : null,
  rows: [],
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_DATA_SUCCESSED:
      return {
        ...state,
        isLoading: false,
        rows: action.payload,
        total: action.total
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      };
    default:
        return state
  }
}
