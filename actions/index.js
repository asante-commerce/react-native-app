export const addToCart = (data) => {
    return {
        type: 'ADD',
        payload: data
    };
}

export const removeFromCart = (data) => {
    return {
        type: 'REMOVE',
        payload: data
    }
}