import { useState } from 'react';
import { signup_page } from './signup_page';
import { forgot_password_page } from './forgot_password_page';
import { resolver_new } from './resolver_new';
import { resolver_form } from './resolver_form';
import { complaint_form } from './complaint_form';
import { resolver_home } from './resolver_home';
import { login_page } from './login_page';
import { admin_login_page } from './admin_login_page';
import { show_complaints } from './show_complaints';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [resolverAuthenticated, setResolverAuthenticated] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (login_page()) {
      setAuthenticated(true);
    }
  };

  const handleAdminLogin = () => {
    if (admin_login_page()) {
      setAuthenticated(true);
      show_complaints();
    }
  };

  const handleComplaintForm = () => {
    complaint_form(email);
  };

  const handleResolverHome = () => {
    resolver_home();
  };

  const handlePageSelection = (page) => {
    if (authenticated) {
      if (email === "22b01a1239@svecw.edu.in") {
        show_complaints();
      } else {
        handleComplaintForm();
      }
    } else if (resolverAuthenticated) {
      handleResolverHome();
    } else {
      switch (page) {
        case "Login":
          handleLogin();
          break;
        case "Signup":
          signup_page();
          break;
        case "Forgot Password":
          forgot_password_page();
          break;
        case "Resolver":
          if (resolver_new()) {
            setResolverAuthenticated(true);
          }
          break;
        case "Admin":
          handleAdminLogin();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
      {/* Sidebar */}
      <select onChange={(e) => handlePageSelection(e.target.value)}>
        <option value="Admin">Admin</option>
        <option value="Login">Login</option>
        <option value="Signup">Signup</option>
        <option value="Forgot Password">Forgot Password</option>
        <option value="Resolver">Resolver</option>
      </select>
    </div>
  );
}
