// login.js

import { useState } from 'react';
import Sidebar from '../components/Sidebar'; // Import the Sidebar component
import styles from './Login.module.css'; // Import CSS file for styling

export default function Login() {
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const [otpSent, setOTPSent] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    const sendOTP = () => {
        // Simulate sending OTP
        const generatedOTP = Math.floor(1000 + Math.random() * 9000);
        setOTPSent(true);
        // You can also send the OTP to the user's email here (for real-world scenario)
    };

    const verifyOTP = () => {
        // Simulate OTP verification
        const correctOTP = otp; // In real-world scenario, you'd compare against the OTP sent to the user's email
        if (otp === correctOTP) {
            setAuthenticated(true);
            // Redirect to complaints page
            // You can use Next.js router for navigation
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    return (
        <div className={styles.container}>
            <Sidebar /> {/* Include the Sidebar component */}
            <div className={styles.content}>
                <h1>Login Page</h1>
                <div className={styles['input-container']}>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                    <br />
                    {!otpSent &&
                        <button className={styles.button} onClick={sendOTP}>Send OTP</button>
                    }
                    {otpSent &&
                        <>
                            <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} placeholder="Enter OTP" />
                            <button className={styles.button} onClick={verifyOTP}>Verify OTP</button>
                        </>
                    }
                </div>
                {authenticated &&
                    <p>Login Successful! Redirecting to complaints page...</p>
                }
            </div>
        </div>
    );
}
