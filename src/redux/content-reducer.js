let initialState = {
  goods: [
    { id: 1, name: 'Bouket 1', price: 3090 },
    { id: 2, name: 'Bouket 2', price: 2190 },
    { id: 3, name: 'Bouket 3', price: 5852 },
    { id: 4, name: 'Bouket 4', price: 9999 },
    { id: 5, name: 'Bouket 5', price: 1160 },
  ],
};

const contentReducer = (state = initialState, action) => {
  return state;
};

export default contentReducer;
