import { useState } from 'react';
import AddPopUp from './../../components/addPopUp/addPopUp';
import TicketsListing from './../../components/ticketsListing/ticketsListing';
import './homePage.css';

const HomePage = () =>{
    const [showAddForm, setShowAddForm] = useState(false);
    const showAddPopup = () => {
        setShowAddForm(true);
    }
    const closeAddPopup = () => {
        setShowAddForm(false);
    }
    return (
        <div id="home-page-container">
            <div id="listing-section">
            <h2>Taskboard</h2>
            <TicketsListing showAddPopup={showAddPopup} />
            </div>
            {showAddForm && <AddPopUp closePopUp={closeAddPopup} />}
        </div>
    )
}

export default HomePage;