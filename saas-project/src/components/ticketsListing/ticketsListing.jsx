import TicketCard from '@components/ticketCard/ticketCard';
import './ticketsListing.css';
import { ticketsData } from '@mocks/tickets';

const TicketsListing = ({ showAddPopup }) => {
    return (<><div id="ticket-listing-container">
        <div id="add-new-ticket-div" onClick={showAddPopup}>+</div>
        {
            ticketsData.map(ticket => {
                return <TicketCard data={ticket} key={ticket.id} showAddPopup={showAddPopup} />
            })
        }
    </div>
    </>)
}

export default TicketsListing;