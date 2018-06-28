export const fetchPlayersRequest = page => {
    return {
        type: "FETCH_PLAYERS_REQUEST",
        payload: {
            page,
        }
    };
};

export const fetchPlayersSuccess = data => {
    return {
        type: "FETCH_PLAYERS_SUCCESS",
        payload: {
            data,
        }
    };
};