import React from "react";
import {Col} from "reactstrap";
import CardItem from "./CardItem";



function Column (props) {

    const {cards, column, columns} = props;

    return (
        <Col>
            {column.status}

            {cards.filter(el =>  el.status === column.status)
                .map(elem => <CardItem
                    key={elem._id}
                    columns={columns}
                    card={elem}/>
                    )}
        </Col>
    )
}

export default Column;