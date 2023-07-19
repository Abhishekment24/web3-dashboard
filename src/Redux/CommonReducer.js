import { REDUX_VAR } from "./ReduxVar";

const initialState = {
  test: 0,
  showTheme:false
};

export  const commonReducer = (state = initialState, action) => {
    let {type,payload}=action
  switch (type) {
    case REDUX_VAR.TEST:
      return {
        ...state,
        test: payload,
      };
    case REDUX_VAR.SHOW_THEME:
      return {
        ...state,
        showTheme: !state.showTheme,
      };

   
    default:
      return state;
  }
};
