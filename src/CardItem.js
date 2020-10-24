import React from "react";
import  {Button, Card, CardBody, CardTitle, CardSubtitle, CardFooter} from "reactstrap";
import {connect} from 'react-redux';
import {deleteCard} from "./action";



function CardItem (props) {

    const {card} = props;
    const{name, status,priority, _id} = card;

    const deleteCardById = () => {
        props.deleteCard(_id)
    }

    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{status}</CardSubtitle>
                {priority}
            </CardBody>
            <CardFooter>
                <Button onClick={deleteCardById}>delete</Button>
            </CardFooter>

        </Card>
    )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    deleteCard: (cardId) => dispatch(deleteCard(cardId))
})


export default connect (mapStateToProps, mapDispatchToProps) (CardItem);