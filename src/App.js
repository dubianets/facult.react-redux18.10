import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Container} from "reactstrap";
import Board from "./Board";
import {getCardsAndColumns} from "./action";
import AddCArd from "./AddCard";


function App(props) {

    useEffect(() => {
        props.getCardsColumns()
    }, [])

    return (
        <Container>

            <AddCArd columns={props.columns}/>

            <Board
                cards={props.cards}
                columns={props.columns}
            />

        </Container>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})
const mapDispatchToProps = (dispatch) => ({
    getCardsColumns: () => dispatch(getCardsAndColumns(dispatch))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
