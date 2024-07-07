import React, { useState } from 'react';
import signInImage from "/Images/signInImage.jpg"
import "./SignUp.css";

const SignUp = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [enteredCaptcha, setEnteredCaptcha] = useState('');

  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredCaptcha !== captcha) {
      alert('Captcha does not match. Please try again.');
      setCaptcha(generateCaptcha());
      setEnteredCaptcha('');
    } else {
      alert('Captcha matched. Form submitted!');
      // Proceed with form submission logic
    }
  };

  return (
    <div className="signInContainer">
      <div className="signInImage">
        <img src={signInImage} alt="Sign In" />
      </div>
      <div className="signInForm">
        <h1 className='formHeading'>Sign Up to Legends Library</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' id='name' required />
          
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' required />
          
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' required />
          
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name='confirmPassword' id='confirmPassword' required />
          
          <label htmlFor="captcha">Captcha</label>
          <div className="captchaContainer">
            <span className="captchaText">{captcha}</span>
            <button type="button" onClick={() => setCaptcha(generateCaptcha())}>Refresh</button>
          </div>
          <input
            type="text"
            name='captcha'
            id='captcha'
            value={enteredCaptcha}
            onChange={(e) => setEnteredCaptcha(e.target.value)}
            required
          />

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
