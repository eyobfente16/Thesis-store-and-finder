import React from 'react';
import './createaccount.css';

function CreateAccount() {
  return (
    <div className="container">
      <h2>Create Account</h2>
      <form>
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Create Account</button>
      </form>
      <p>Already have an account? <a href="#">Log in</a></p>
    </div>
  );
}

export default CreateAccount;
