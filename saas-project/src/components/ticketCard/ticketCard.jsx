import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './ticketCard.css';
import store from "@store";
import { observer } from "mobx-react";

const TicketCard = ({ data, showAddPopup }) => {
    const handleDelete = (e) => {
        const clickedEleId = e.target.getAttribute('id');
        store.removeTicketById(clickedEleId);
    }

    const handleEdit = (e) => {
        const clickedEleId = e.target.getAttribute('id');
        const clickedEleData = store.getTicketById(clickedEleId);
        showAddPopup(clickedEleData);
    }

    return (<div className="ticket-card-container" key={data.id} id={data.id}>
        <div className='edit-delete-container'>
            <div onClick={handleDelete} id={data.id}><FontAwesomeIcon icon={faTrash} /> </div>
            <div onClick={handleEdit} id={data.id} ><FontAwesomeIcon icon={faPenToSquare} /> </div>
        </div>
        <h1>{data.subject}</h1>
        <h2>priority {data.priority} </h2>
        <h4>status {data.status}</h4>
        <p>{data.description}</p>
    </div>)
}

export default observer(TicketCard);