const initialState = [1];

export default function (state = initialState, action) {
    switch (action.type) {
        case "UPDATE_PAGE":
            return [action.payload.page]
        default: 
            return state;
    }
};