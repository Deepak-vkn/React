const { createStore } = require('redux'); 
const produce=require('immer').produce


const initialState = {
    name: 'deepak',
    adress: {
        place: 'chealri',
        pin: 676317,
        state: 'kerala'
    },
    age: 24
};

const STREET_UPDATED = 'STREET_UPDATED';

function streetUpdate(street) {
    return {
        type: STREET_UPDATED,
        payload: street // Fixed typo
    };
}

const reducer = (state = initialState, action) => { // Added arrow function syntax
    switch (action.type) {
        case STREET_UPDATED:


            // return {
            //     ...state,
            //     adress: {
            //         ...state.adress, // Fixed typo
            //         street: action.payload // Use payload to get the new street value
            //     }
            // }
            return produce(state,(draft)=>{
                    draft.adress.street=action.payload

                })
            
            



        default:
            return state; // Return current state
    }
};

const store = createStore(reducer);
console.log('Initial state:', store.getState());

// Dispatch an action to update the street
store.dispatch(streetUpdate('New Street Name'));
console.log('Updated state:', store.getState());
