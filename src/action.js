import axios from 'axios';


export function getCardsAndColumns (){
    return (dispatch) => {
        axios.get(`https://nazarov-kanban-server.herokuapp.com/card/`)
            .then(res => { dispatch({
                type: 'GET_CARDS',
                    payload: res.data})
            })
            .catch(err => err)

        axios.get(`https://nazarov-kanban-server.herokuapp.com/column/`)
            .then(res => {
                dispatch({
                    type:'GET_COLUMNS',
                    payload: res.data})
            })
                    .catch(err => err)
    }
}

export function deleteCard (cardID) {
    return (dispatch) => {
        axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${cardID}`)
            .then(res => {
                axios.get(`https://nazarov-kanban-server.herokuapp.com/card/`)
                    .then(res => {
                        dispatch({
                            type: 'GET_CARDS',
                            payload: res.data
                        })
                    })
                    .catch(err => err)
            })
            .catch(err => err)
    }
}

export function addCard (card) {
    return (dispatch) => {
        axios.post(`https://nazarov-kanban-server.herokuapp.com/card/`, card)
            .then(res => {
                axios.get(`https://nazarov-kanban-server.herokuapp.com/card/`)
                    .then(res => {
                        dispatch({
                            type: 'GET_CARDS',
                            payload: res.data
                        })
                    })
                    .catch(err => err)
            })
            .catch(err => err)
    }
}
