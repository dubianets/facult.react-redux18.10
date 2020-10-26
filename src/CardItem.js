import React from "react";
import  {Button, Card, CardBody, CardTitle, CardSubtitle, CardFooter} from "reactstrap";
import {connect} from 'react-redux';
import {changeStatus, deleteCard} from "./action";



function CardItem (props) {

    const {card, columns} = props;
    const{name, status,priority, _id} = card;

    const deleteCardById = () => {
        props.deleteCard(_id)
    }

    const changeStatusHandler = (value) => {
        const statusChanger = columns.map(el =>el.status)
        const statuses = statusChanger[statusChanger.indexOf(status) + value]
        props.changeStatus(statuses, _id)
    }

    return (
        <Card body inverse color="dark">
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>
                    <Button  color='success' onClick={()=> changeStatusHandler(-1)}>←</Button>
                    {status}
                    <Button color='success' onClick={()=> changeStatusHandler(1)}>→</Button>
                </CardSubtitle>
                {priority}
            </CardBody>
            <CardFooter>
                <Button body inverse color="primary" onClick={deleteCardById}>delete</Button>
            </CardFooter>

        </Card>
    )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    changeStatus: (statuses, cardId) => dispatch(changeStatus(statuses, cardId))
})


export default connect (mapStateToProps, mapDispatchToProps) (CardItem);