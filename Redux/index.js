const { createStore } = require('redux');

// Action Types
const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_RESTOCK = 'CAKE_RESTOCK';
const ICECREAM_ORDER = 'ICECREAM_ORDER';
const ICECREAM_RESTOCK = 'ICECREAM_RESTOCK';

// Action Creators
function orderCake() {
    return {
        type: CAKE_ORDER,
        payload: 1
    }
}

function cakeRestock(qty = 1) {
    return {
        type: CAKE_RESTOCK,
        payload: qty
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDER,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCK,
        payload: qty
    }
}

// Initial State
const initialState = {
    numberOfCakes: 10,
    numberOfIceCreams: 10
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDER:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        case CAKE_RESTOCK:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }
        case ICECREAM_ORDER:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - action.payload
            }
        case ICECREAM_RESTOCK:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.payload
            }
        default:
            return state;
    }
}

// Create Store
const store = createStore(reducer);

// Initial State Log
console.log('Initial state:', store.getState());

// Subscribe to Store
const unsubscribe = store.subscribe(() => {
    console.log('Current state:', store.getState());
})

// Dispatch Actions
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderIceCream());
store.dispatch(restockIceCream());
store.dispatch(cakeRestock(4));

// Unsubscribe from Store
unsubscribe();

// Dispatch another action to demonstrate that subscription has been removed
store.dispatch(orderCake());
console.log('State after unsubscribed order:', store.getState());
