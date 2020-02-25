const combinedReducer = (state = {}, action) => {
  const {type: actionType} = action;

  switch (actionType) {
    default:
      return state;
  }
};

export default combinedReducer;
