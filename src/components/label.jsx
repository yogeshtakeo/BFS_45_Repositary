import React from 'react'

function Label({ labelName, labelId, isInputOrTextArea, children }) {
  const inputOrText = isInputOrTextArea ? 'input' : 'textarea'
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
