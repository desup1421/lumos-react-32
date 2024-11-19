import { TOGGLE_LANGUAGE } from "./actions"

//state
const initialState = {
    lang : 'en'
  };

//reducer
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LANGUAGE:
      return {
        ...state,
        lang: state.lang === 'en' ? 'id' : 'en'
        // lang: action.payload
      }
    default:
      return state;
  }
};

export default languageReducer;