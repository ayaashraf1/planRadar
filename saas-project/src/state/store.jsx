import { makeAutoObservable } from 'mobx';
import { ticketsData } from '@mocks/tickets';
import { default as UUID } from "node-uuid";

class Tickets{
  ticketsArr = [];

  constructor(){
    makeAutoObservable(this);
  }

  loadTickets(){
    this.ticketsArr = ticketsData;
  }

  updateTicketById(ticketId,newData){
    this.ticketsArr = this.ticketsArr.map( ticket =>{
      if(ticket.id == ticketId){
        newData.id = ticketId;
        ticket = newData;
      }
      return ticket;
    });
  }

  removeTicketById(ticketId){
    this.ticketsArr = this.ticketsArr.filter( ticket => ticket.id !== ticketId);
  }
  getTicketById(ticketId){
    return this.ticketsArr.filter( ticket => ticket.id === ticketId)[0];
  }
  addTicket(ticketData){
    const id = UUID.v4();
    ticketData.id = id;
    this.ticketsArr.push(ticketData);
  }
}
const store = new Tickets();

export default store;