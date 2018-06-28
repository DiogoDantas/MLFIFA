const initialState = [];

export default function(state=initialState, action){
    switch(action.type) {
        case "FETCH_PLAYERS_SUCCESS":
            return [...state, ...action.payload.data];
        default:
            return state;
    }
}