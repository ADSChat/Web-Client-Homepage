import React from 'react';

const ADSChat: React.FC = () => {
    return (
        <div>
            <div className="banner" style={bannerStyle}>
                <div className="name">ADS-Chat</div>
                <div className="top-buttons">
                    <button onClick={() => window.location.href='https://example-login.com'} style={buttonStyle}>Login</button>
                    <button onClick={() => window.location.href='https://example-signup.com'} style={buttonStyle}>Sign Up</button>
                </div>
            </div>
            <div className="container" style={containerStyle}>
                <div className="logo">
                    <img src="logo.png" alt="ADS-Chat Logo" />
                </div>
                <h1>Welcome to ADS-Chat</h1>
                <div className="buttons">
                    <button className="btn login-btn" onClick={() => window.location.href='login.html'}>Login</button>
                    <button className="btn register-btn" onClick={() => window.location.href='register.html'}>Register</button>
                    <button className="btn download-btn" onClick={() => window.location.href='downloads.html'}>Downloads</button>
                </div>
            </div>
        </div>
    );
};

const bannerStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#F9B006',
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    fontFamily: '"Times New Roman", Times, serif'
};

const buttonStyle: React.CSSProperties = {
    backgroundColor: 'white',
    color: '#F9B006',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer'
};

const containerStyle: React.CSSProperties = {
    marginTop: '60px',
    fontFamily: '"Times New Roman", Times, serif'
};

export default ADSChat;
