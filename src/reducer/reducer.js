const initialState = {
    cards:[],
    columns: []
}

const kanbanBoard = (state = initialState,action) => {
    switch (action.type) {
        case 'GET_CARDS':
            return {...state,
                cards:[...action.payload]}

        case 'GET_COLUMNS':
            return {...state,
                columns: [...action.payload]}

        default:
            return state;

}
}

export default kanbanBoard;