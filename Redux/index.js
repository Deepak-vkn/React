const { createStore } = require('redux');

const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_RESTOCK = 'CAKE_RESTOCK';
function orderCake() {
    return {
        type: CAKE_ORDER,
        quantity: 1
    }
}
function Restock(qty=1){
    return{
        type:CAKE_RESTOCK,
        quantity:qty
    }
}


const initialState = {
    numberOfCakes: 10

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDER:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        case CAKE_RESTOCK:
            return{
                ...state,
                numberOfCakes:state.numberOfCakes+action.quantity
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

console.log('Initial state:', store.getState());

const unsubscribe=store.subscribe(()=>{console.log('curunt state',store.getState())

})
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(Restock(4))
unsubscribe()

