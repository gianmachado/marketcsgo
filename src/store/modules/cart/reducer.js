export default function cart(state = [], action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.skin];
        default:
            return state;
    }
}
