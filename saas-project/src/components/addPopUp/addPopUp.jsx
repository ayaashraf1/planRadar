import React, { useState } from 'react';
import {default as UUID} from "node-uuid";
import './addPopUp.css';
import { data } from './../../mocks/tickets';

const AddPopUp = ({closePopUp}) =>{
    const [subject, setSubject] = useState('');
    const [priority, setPriority] = useState(1);
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');

    const addNewTicket = () => {
        const id = UUID.v4();
        const newTicket = {
            id:id,
            subject:subject,
            priority:priority,
            status:status,
            description:description
        }
        data.push(newTicket);
        closePopUp();
    }

    return(
        <><div id="overlay" onClick={closePopUp}></div>
        <div id="add-form-popUp">
            <div onClick={closePopUp} className='closeIcon'>x</div>
            <h3>Add New Ticket</h3>
            <input type='text' placeholder='Enter subject' onChange={(e) => setSubject(e.target.value)} /><br />
            <input type='number' placeholder='priority' min={1} max={10} onChange={e => setPriority(e.target.value)} /><br />
            <select onChange={e => setStatus(e.target.value)}>
                <option disabled selected>Select Status</option>
                <option value='new'>new</option>
                <option value='active'>active</option>
                <option value='closed'>closed</option>
            </select><br />
            <textarea rows={5} placeholder='Enter description' onChange={e => setDescription(e.target.value)}></textarea><br />
            <button onClick={addNewTicket} disabled={!subject || !priority || !status || !description}>Add</button>
        </div></>
    )
}

export default AddPopUp;
