import React, { useEffect, useState } from 'react';
import './addPopUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import store from "@store";
import { observer } from "mobx-react";

const AddPopUp = ({ closePopUp, popUpData }) => {
    const [subject, setSubject] = useState('');
    const [priority, setPriority] = useState(1);
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const addNewTicket = () => {
        const newTicket = {
            subject,
            priority,
            status,
            description
        }
        store.addTicket(newTicket)
        closePopUp();
    }
    const editTicket = () => {
        store.updateTicketById(popUpData.id, { subject, priority, status, description });
        closePopUp();
    }
    useEffect(() => {
        if (popUpData.id) {
            setIsEdit(true);
            setSubject(popUpData.subject);
            setPriority(popUpData.priority);
            setStatus(popUpData.status);
            setDescription(popUpData.description);
        } else {
            setIsEdit(false);
        }

    }, [popUpData]);

    return (
        <><div id="overlay" onClick={closePopUp}></div>
            <div id="add-form-popUp">
                <div onClick={closePopUp} className='closeIcon'><FontAwesomeIcon icon={faXmark} /></div>
                <h3>{isEdit ? 'Edit Ticket' : 'Add New Ticket'} </h3>
                <input type='text' placeholder='Enter subject' value={subject} onChange={(e) => setSubject(e.target.value)} /><br />
                <input type='number' placeholder='priority' value={priority} min={1} max={10} onChange={e => setPriority(e.target.value)} /><br />
                <select onChange={e => setStatus(e.target.value)} value={status}>
                    <option value='' disabled>Select Status</option>
                    <option value='new'>new</option>
                    <option value='active'>active</option>
                    <option value='closed'>closed</option>
                </select><br />
                <textarea rows={5} placeholder='Enter description' value={description} onChange={e => setDescription(e.target.value)}></textarea><br />
                <button onClick={isEdit ? editTicket : addNewTicket} disabled={!subject || !priority || !status || !description}>{isEdit ? 'Edit' : 'Add'}</button>
            </div></>
    )
}

export default observer(AddPopUp);
