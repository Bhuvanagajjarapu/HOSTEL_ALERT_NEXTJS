// components/Sidebar.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`${styles.sidebar} ${isOpen ? '' : styles.closed}`}>
            <div className={styles.toggleButton} onClick={toggleNavbar}>
                <span>&times;</span>
            </div>
            <ul>
                <li>
                    <Link href="/login_page">Login</Link>
                </li>
                <li>
                    <Link href="/signup_page">Signup</Link>
                </li>
                <li>
                    <Link href="/forgotPassword">Forgot Password</Link>
                </li>
                <li>
                    <Link href="/resolver">Resolver</Link>
                </li>
                <li>
                    <Link href="/admin">Admin</Link>
                </li>
            </ul>
        </nav>
    );
}
