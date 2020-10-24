import React, {useState} from "react";
import  {Button, Modal, ModalHeader, ModalBody, Input, ModalFooter} from "reactstrap";
import {connect} from 'react-redux';
import {addCard} from "./action";



function AddCArd(props) {

    const {columns} = props;

    const [modal, setModal] = useState(false)

    const [nameInput,setNameInput] = useState('')
    const [priorityInput,setPriorityInput] = useState('')
    const [statusInput,setStatusInput] = useState('todo')

    const addCardInput = () => {
        const newCard = {
            name:nameInput,
            priority: priorityInput,
            status : statusInput
        }
        props.addCardHandler(newCard)
        setNameInput('')
        setPriorityInput('')
        setStatusInput('todo')
        setModal(!modal)
    }

    return (
        <div>
            <Button onClick={() => setModal(!modal)}>add card</Button>

            <Modal isOpen={modal}>
                <ModalHeader>Add Card</ModalHeader>
                <ModalBody>
                    <label>Name:</label>
                    <Input type='text' value={nameInput}
                           onChange={(event) => setNameInput(event.target.value)}/>
                    <label>Priority:</label>
                    <Input type='text' value={priorityInput}
                           onChange={(event) => setPriorityInput(+event.target.value)}/>
                    <label>Status:</label>
                    <Input type='select' value={statusInput}
                           onChange={(event) => setStatusInput(event.target.value)}>
                        {columns.map(el => <option value = {el.status}>{el.status}</option>)}
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={addCardInput}>Add</Button>{' '}
                    <Button color="secondary" onClick={() => setModal(!modal)}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    addCardHandler: (card) => dispatch(addCard(card))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddCArd);
