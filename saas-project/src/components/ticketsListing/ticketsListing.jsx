import TicketCard from '../ticketCard/ticketCard';
import './ticketsListing.css';
import { data } from './../../mocks/tickets';

const TicketsListing = ({showAddPopup}) => {
    return (<><div id="ticket-listing-container">
        <div id="add-new-ticket-div" onClick={showAddPopup}>+</div>
        {
            data.map(ticket => {
                return <TicketCard data={ticket} key={ticket.id} />
            })
        }
    </div>
    </>)
}

export default TicketsListing;