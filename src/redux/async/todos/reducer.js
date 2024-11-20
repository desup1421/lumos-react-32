import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE, PROCESS_TODO_SUCCESS, GET_TODO } from "./actions";

//state
const initialState = {
  // todos is list of todos
  todos: [],
  loading: false,
  error: null,
  isSuccess: false,
  data: {},
};


//reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isSuccess: false,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PROCESS_TODO_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        data: {}
      };
    case GET_TODO:
      return {
        ...state,
        isSuccess: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;