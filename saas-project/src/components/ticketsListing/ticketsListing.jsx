import { useEffect } from 'react';
import TicketCard from '@components/ticketCard/ticketCard';
import './ticketsListing.css';
import store from "@store";
import { observer } from "mobx-react";

const TicketsListing = ({ showAddPopup }) => {
    useEffect(() => {
        store.loadTickets();
    }, []);

    return (<><div id="ticket-listing-container">
        <div id="add-new-ticket-div" onClick={showAddPopup}>+</div>
        {
            store.ticketsArr.map(ticket => {
                return <TicketCard data={ticket} key={ticket.id} showAddPopup={showAddPopup} />
            })
        }
    </div>
    </>)
}

export default observer(TicketsListing);