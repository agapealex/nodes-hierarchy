const initialState = {
  list: [],
};

function xReducer(state = initialState, action) {
  switch (action.type) {
    case "DATA":
      return {
        list: action.payload,
      };
    default:
      return state;
  }
}

export default xReducer;
