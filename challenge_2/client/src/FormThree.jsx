import React from 'react';

const FormThree = ({ updateCredit, updateExpiry, updateCVV, updateBillZip, click }) => (
  <div>
    <form>
      <label>
        Credit Card:
        <input onChange={(e) => updateCredit(e)} type="text" name="credit" />
      </label>
      <div>
        <label>
        Expiry Date:
          <input onChange={(e) => updateExpiry(e)} type="text" name="expiry" />
        </label>
      </div>
      <div>
        <label>
        CVV:
          <input onChange={(e) => updateCVV(e)} type="text" name="cvv" />
        </label>
      </div>
      <div>
        <label>
        Billing Zip:
          <input onChange={(e) => updateBillZip(e)} type="text" name="billZip" />
        </label>
      </div>
      <input onClick={() => click()}type="submit" name="Submit" />
    </form>
  </div>
);

export default FormThree;
