export const updatePage = page => {
    return {
        type: "UPDATE_PAGE",
        payload: {
            page,
        },
    };
};