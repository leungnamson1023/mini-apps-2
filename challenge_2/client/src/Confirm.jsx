import React from 'react';

const Confirm = ({ name, email, password, addressLineOne, addressLineTwo, city, state, zip, credit, expiry, cvv, billZip, click }) => (
  <div>
    <h1>Summarization:</h1>
    <h2>Personal Info:
      <ul>{name}</ul>
      <ul>{email}</ul>
      <ul>{password}</ul>
    </h2>
    <h3>Shipping Info:
      <ul>{addressLineOne}</ul>
      <ul>{addressLineTwo}</ul>
      <ul>{city}</ul>
      <ul>{state}</ul>
      <ul>{zip}</ul>
    </h3>
    <h4>Payment Method:
      <ul>{credit}</ul>
      <ul>{expiry}</ul>
      <ul>{cvv}</ul>
      <ul>{billZip}</ul>
    </h4>
    <input onClick={() => click()}type="submit" name="Submit" />
  </div>
);

export default Confirm;
