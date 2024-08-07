export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const updatedCart = [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price
                }
            ];
            const date = new Date();
            date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
            const expires = `expires=${date.toUTCString()}`;
            document.cookie = `cart=${JSON.stringify(updatedCart)};${expires};path=/`;
            return updatedCart;
        case ADD_ITEM:


        
            return null;
        default:
            return state;
    }
};

export default cartReducer;
