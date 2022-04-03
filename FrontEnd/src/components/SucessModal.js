import { Modal } from 'react-bootstrap';
import Tick from '../assets/img/tick.png'
const SucessModal = (props) => {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <img src={Tick} alt={"sucess"} style={{ width: "50px", height: "50px" }} />
                </div>
                <div>
                    {props.text}
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}
export default SucessModal;