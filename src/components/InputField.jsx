import React from 'react';

const InputField = ({ type, placeholder, name }) => {
  return (
    <input type={type} placeholder={placeholder} name={name} className="input-field" />
  );
};

export default InputField;
