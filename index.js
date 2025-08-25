// console.log("From index.js");
const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const combineReducers = redux.combineReducers;
const BUY_ICECREAM = "BUY_ICECREAM";
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// action is an object that having a type property .
//action creator is a function that creates an action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux action",
  };
}
function buyicecream() {
  return {
    type: BUY_ICECREAM,
    info: "second redux action",
  };
}
//Reducer
// A reducer is a pure function that takes the previous state and an action, and returns the next state.
//(previousState, action) => newState
// const initialState = {
//   numofCakes: 10,
//   numoficecreams: 20,
// };

const initialCakeState = {
  numofCakes: 10,
};
const initialIcecreamState = {
  numofIcecreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };

    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numofIcecreams: state.numofIcecreams - 1,
      };

    default:
      return state;
  }
};

//cobmined multiple reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});

//Redux Store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
unsubscribe(); // Unsubscribe the listener
