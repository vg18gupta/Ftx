import { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import './LogoutModal.css'

const LogoutModal = ({handleModalClose}) => {
    const authContext = useContext(AuthContext);
    function handleLogout() {
        authContext.logout();
    }
    return (
        <div className="logout-modal" >
            <div className="logout-container">
                <span className="close" onClick={handleModalClose}>&times;</span>
                <div className="logout-content" onClick={handleLogout}>
                    Logout
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
