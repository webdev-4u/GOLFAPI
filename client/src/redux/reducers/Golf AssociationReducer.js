// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
};

// Reducer
export default function Golf AssociationReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.GET_USER_SUCCESS:
      return { ...state, user: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}