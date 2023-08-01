import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Custom CSS file for additional styling

const App = () => {
  const [user, setUser] = useState(null);

  // Simulate user login and set user state
  const handleLogin = () => {
    const mockUser = { id: 123, name: 'John Doe' };
    setUser(mockUser);
  };

  // Simulate user logout and reset user state
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <header>
        <h1>XRPL Hosting as a Service</h1>
        {user ? (
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        )}
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/purchase">Purchase</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/purchase" element={<Purchase user={user} />} />
          {/* Add more routes and components for other pages */}
        </Routes>
      </main>

      <footer>
        <p>Copyright © 2023 XRPL Hosting as a Service</p>
      </footer>
    </div>
  );
};

// Home component to display content based on user authentication
const Home = ({ user }) => {
  return (
    <div>
      <h2>Welcome to XRPL Hosting as a Service</h2>
      {user ? (
        <p>Hello, {user.name}! You can now purchase instances and host XRPL hooks.</p>
      ) : (
        <p>Please login to access XRPL hosting services.</p>
      )}
    </div>
  );
};

// Purchase component for users to buy instances/servers
const Purchase = ({ user }) => {
  return (
    <div>
      <h2>Purchase Instances</h2>
      {user ? (
        <>
          <p>Hello, {user.name}! Choose your desired instance and make a purchase.</p>
          {/* Add instance selection and payment processing components */}
        </>
      ) : (
        <p>Please login to purchase instances.</p>
      )}
    </div>
  );
};

export default App;
