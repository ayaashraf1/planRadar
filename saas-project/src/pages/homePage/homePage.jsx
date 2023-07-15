import { useState } from 'react';
import AddPopUp from '@components/addPopUp/addPopUp';
import TicketsListing from '@components/ticketsListing/ticketsListing';
import './homePage.css';

const HomePage = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [popUpData, setPopUpData] = useState({});

    const showAddPopup = (data) => {
        if (data) {
            setEditMode(true);
            setPopUpData(data)
        }
        setShowAddForm(true);
    }
    const closeAddPopup = () => {
        if (editMode) {

        }
        setShowAddForm(false);
    }
    return (
        <div id="home-page-container">
            <div id="listing-section">
                <h2>Taskboard</h2>
                <TicketsListing showAddPopup={showAddPopup} />
            </div>
            {showAddForm && <AddPopUp closePopUp={closeAddPopup} popUpData={popUpData} />}
        </div>
    )
}

export default HomePage;