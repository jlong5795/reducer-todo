export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_COMPELTED':
            return {
                ...state,
                completed: !state.completed
            };
        case 'ADD_TODO':
            return {
                ...state,
                item: action.payload,
                completed: false,
                id: Date.now()
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                //logic to remove items with completed: true
            }
            
        default:
            return state;
    }
}

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 38929987589
    },
    {
        item: 'Get this app working',
        completed: false,
        id: 38929987590
    }
];