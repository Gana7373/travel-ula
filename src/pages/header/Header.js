import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import BookingModal from '../bookingModal/BookingModal';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <header className="header-container">
            <div className="header-content">
                <h1 className="header-title">Big Cats Week at Maasai Mara</h1>
                <Link to="/booking" className="book-now-btn" onClick={openModal}>Book Now</Link>
            </div>
            <h2 className="header-subtitle">Diwali 2023 Special</h2>
            <nav className="nav-menu">
                <ul>
                    <li><Link to="/">Overview</Link></li>
                    <li><Link to="/itinerary">Itinerary</Link></li>
                    <li><Link to="/costs">Costs</Link></li>
                    <li><Link to="/terms">Terms and Conditions</Link></li>
                    <li><Link to="/payment">Payment Terms</Link></li>
                    <li><Link to="/inclusions-exclusions">Inclusions & Exclusions</Link></li>
                </ul>
            </nav>

            <BookingModal isOpen={isModalOpen} closeModal={closeModal} />
        </header>
    );
};

export default Header;