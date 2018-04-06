import React from 'react';

const FormOne = ({ updateName, updateEmail, updatePassword, click }) => (
  <div>
    <form>
      <label>
        Name:
        <input onChange={(e) => updateName(e)} type="text" name="name" />
      </label>
      <div>
        <label>
        Email:
          <input onChange={(e) => updateEmail(e)} type="text" name="email" />
        </label>
      </div>
      <div>
        <label>
        Password:
          <input onChange={(e) => updatePassword(e)} type="text" name="password" />
        </label>
      </div>
      <input onClick={() => click()}type="submit" name="Submit" />
    </form>
  </div>
);

export default FormOne;
