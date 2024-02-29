import React from 'react';

function Label({ labelName, labelId, children }) {
  return (
    <div>
      <label htmlFor={labelId}>{labelName}</label>
      <textarea id={labelId} name={labelId} required />
      {children}
    </div>
  );
}

export default Label;
