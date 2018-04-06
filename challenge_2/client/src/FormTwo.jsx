import React from 'react';

const FormTwo = ({ updateAddressOne, updateAddressTwo, updateCity, updateState, updateZip, click }) => (
  <div>
    <form>
      <label>
        Address 1:
        <input onChange={(e) => updateAddressOne(e)} type="text" name="addressOne" />
      </label>
      <div>
        <label>
        Address 2:
          <input onChange={(e) => updateAddressTwo(e)} type="text" name="addressTwo" />
        </label>
      </div>
      <div>
        <label>
        City:
          <input onChange={(e) => updateCity(e)} type="text" name="city" />
        </label>
      </div>
      <div>
        <label>
        State:
          <input onChange={(e) => updateState(e)} type="text" name="state" />
        </label>
      </div>
      <div>
        <label>
        Zip:
          <input onChange={(e) => updateZip(e)} type="text" name="zip" />
        </label>
      </div>
      <input onClick={() => click()}type="submit" name="Submit" />
    </form>
  </div>
);

export default FormTwo;
