import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { isInstalled, getAddress } from '@gemwallet/api';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; // Add this line to import the Nav component


function App() {
  const [gemWalletActive, setGemWalletActive] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnect = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        getAddress().then((response) => {
          console.log(`Your address: ${response.result?.address}`);
          setWalletAddress(response.result?.address);
          setGemWalletActive(true);
        });
      }
    });
  };

  const handleLogout = () => {
    // Perform any logout actions here if needed
    setGemWalletActive(false);
    setWalletAddress('');
  };

  useEffect(() => {
    // Check if GemWallet is active on component mount
    isInstalled().then((response) => {
      setGemWalletActive(response.result.isInstalled);
    });
  }, []);

  const instances = [
    { name: 'Small', price: 10 },
    { name: 'Medium', price: 20 },
    { name: 'Large', price: 30 },
  ];

  // Helper function to abbreviate the wallet address
  const abbreviateAddress = (address) => {
    if (!address) return '';
    const firstPart = address.substring(0, 6);
    const lastPart = address.substring(address.length - 4);
    return `${firstPart}...${lastPart}`;
  };

  return (
    <div className="App d-flex flex-column justify-content-between">
      {/* Top Fold */}
      <div className="d-flex flex-column align-items-center mt-5">
        <h1>Yester</h1>
        {!gemWalletActive ? (
          <button onClick={handleConnect} className="btn btn-primary mt-4">
            Connect with GemWallet
          </button>
        ) : (
          // Show the main content when GemWallet is active
          <div className="full-width-div">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <h2>Support Evernodes!</h2>
                  <p>We are selling the following instances:</p>
                  <ul>
                    {instances.map((instance) => (
                      <li key={instance.name}>
                        {instance.name}: ${instance.price}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-2 fixed-bottom" style={{ height: '60px' }}>
        {/* Navigation Menu */}
        <Navbar className="bg-body-tertiary bnav">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="logo"
                src="xrpllogo.png" // Replace with the URL of your logo image
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Yester
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#docs">Docs</Nav.Link>
              <Nav.Link href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                GitHub
              </Nav.Link>
              {gemWalletActive && (
                <Nav.Link href="#user-profile">User Profile</Nav.Link>
              )}
            </Nav>
            {gemWalletActive && (
              <div className="user-profile-section d-flex align-items-center">
                <img
                  src="user-image.png" // Replace with the URL of your default profile image
                  alt="User Profile"
                  className="rounded-circle profile-image"
                />
                <div className="ml-2">Logged in as: {abbreviateAddress(walletAddress)}</div>
                <button onClick={handleLogout} className="btn btn-outline-light ml-2">
                  Logout
                </button>
              </div>
            )}
          </Container>
        </Navbar>
      </footer>
    </div>
  );
}

export default App;
