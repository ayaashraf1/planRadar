import './ticketCard.css';

const TicketCard = ({ data }) => {
    return (<div className="ticket-card-container" key={data.id}>
        <h1>{data.subject}</h1>
        <h2>priority {data.priority} </h2>
        <h4>status {data.status}</h4>
        <p>{data.description}</p>
    </div>)
}

export default TicketCard;