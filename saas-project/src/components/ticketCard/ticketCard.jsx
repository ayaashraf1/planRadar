import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './ticketCard.css';
import { ticketsData } from '@mocks/tickets';

const TicketCard = ({ data, showAddPopup }) => {
    const handleDelete = (e) => {
        //[to-do] handle delete
        const clickedEleId = e.target.parentNode.parentNode.parentNode.getAttribute('id');
        const index = ticketsData.findIndex(f => f.id == clickedEleId);
        delete ticketsData[index];
    }

    const handleEdit = (e) => {
        const clickedNode = e.target.parentNode.parentNode.parentNode;
        const clickedEleId = clickedNode.getAttribute('id') ? clickedNode.getAttribute('id') : clickedNode.parentNode.getAttribute('id')
        const clickedEleData = ticketsData.filter(ticket => { return ticket.id == clickedEleId })[0];
        debugger
        showAddPopup(clickedEleData);
    }

    return (<div className="ticket-card-container" key={data.id} id={data.id}>
        <div className='edit-delete-container'>
            <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
            <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
        </div>
        <h1>{data.subject}</h1>
        <h2>priority {data.priority} </h2>
        <h4>status {data.status}</h4>
        <p>{data.description}</p>
    </div>)
}

export default TicketCard;