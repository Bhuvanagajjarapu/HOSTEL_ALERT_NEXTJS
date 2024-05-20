// pages/signup_page.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import styles from './SignupPage.module.css';

export default function SignupPage() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [hord, setHord] = useState('');
    const [hostel, setHostel] = useState('');
    const [floor, setFloor] = useState('');
    const [roomNo, setRoomNo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleHordChange = (e) => {
        setHord(e.target.value);
    };

    const handleHostelChange = (e) => {
        setHostel(e.target.value);
    };

    const handleFloorChange = (e) => {
        setFloor(e.target.value);
    };

    const handleRoomNoChange = (e) => {
        setRoomNo(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to submit form data
    };

    return (
        <div className={styles.container}>
            <Sidebar />
            <form onSubmit={handleSubmit}>
                <div className={styles.input}>
                    <input
                        type="text"
                        placeholder="Enter your Register number"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className={styles.input}>
                    <select
                        value={hord}
                        onChange={handleHordChange}
                    >
                        <option value="">Select Hosteler or Regular</option>
                        <option value="Hosteler">Hosteler</option>
                        <option value="DayScholar">DayScholar</option>
                    </select>
                </div>
                {hord === "Hosteler" && (
                    <>
                        <div className={styles.input}>
                            <select
                                value={hostel}
                                onChange={handleHostelChange}
                            >
                                <option value="">Select your hostel</option>
                                {/* Populate options dynamically */}
                            </select>
                        </div>
                        {hostel && (
                            <>
                                <div className={styles.input}>
                                    <select
                                        value={floor}
                                        onChange={handleFloorChange}
                                    >
                                        <option value="">Select your floor</option>
                                        {/* Populate options dynamically */}
                                    </select>
                                </div>
                                {floor && (
                                    <div className={styles.input}>
                                        <select
                                            value={roomNo}
                                            onChange={handleRoomNoChange}
                                        >
                                            <option value="">Select your room no</option>
                                            {/* Populate options dynamically */}
                                        </select>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
                <div className={styles.input}>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>
                <button type="submit" className={styles.button}>Signup</button>
            </form>
        </div>
    );
}
