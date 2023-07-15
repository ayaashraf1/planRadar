import { useNavigate } from 'react-router-dom';
import welcomeImg from './../../assets/welcome2.jpeg';
import './welcomPage.css';

const WelcomPage = () => {
    const navigate = useNavigate();

    return <div id="welcome-page-container">
        <div>
            <img src={welcomeImg} alt='welcome' />
            <div id="welcome-message">
                <h1>Hello!</h1>
                <div>PlanRadar is a SaaS application for construction documentation & defect management. Our
                    customers create lots of tickets every day.</div><br/>
                <button onClick={() => { navigate("/listing") }}>go to listing page</button>
            </div>
        </div><br/>
        <small>Designed & Developed by Aya</small>
    </div>
}

export default WelcomPage;