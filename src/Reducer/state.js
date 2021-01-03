const initialState = {
  loggedIn: false,
  user: {},
  images: {},
  imagesVisited: {}
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'loginButtonClicked':
      newState.loggedIn = false;
      newState.user = {};
      break;
    case 'registerUser':
      newState.user = action.value;
      newState.loggedIn = true;
      break;
    default:
      break;
  }
  return newState;
}

export default reducer;
