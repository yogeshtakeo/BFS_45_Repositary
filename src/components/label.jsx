import React from 'react'
import '../styles/form.css'

function Label({ labelName, labelId, isInputOrTextArea, children }) {
  return (
    <div>
      <label htmlFor={labelId}>{labelName}</label>
      {isInputOrTextArea ? (
        <input
          id={labelId}
          name={labelId}
          required
          rows={4} 
        />
      ) : (
        <textarea
          id={labelId}
          name={labelId}
          required
        />
      )}
      {children}
    </div>
  );
}

export default Label;
