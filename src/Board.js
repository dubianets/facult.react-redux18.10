import React from "react";
import {Row} from "reactstrap";
import Column from "./Column";


function Board(props) {

    const {cards, columns} = props;

    return (
        <Row>
            {columns.map(el => <Column
                    key={el._id}
                    column={el}
                    columns={columns}
                    cards={cards}
                />
            )}
        </Row>
    )
}

export default Board;