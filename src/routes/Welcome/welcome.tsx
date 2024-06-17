import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

export default function Welcome() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSignIn = () => {
    navigate('/login',{replace: true});
  };  
  
  return (
    <div className="cube-container">
      <div className="cube">
        <p className="cube-text">Welcome to the TCH-s page</p>
        <p className="cube-text">Sign up and get the information about your and global sign ins in this platform :)</p>
        <div className="button-container">
          <button className="button" onClick={handleSignUp}>Sign Up</button>
          <button className="button" onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
