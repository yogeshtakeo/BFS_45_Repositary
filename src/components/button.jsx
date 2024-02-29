import React from 'react'

function Button({buttonText = 'Submit'}) {
  return (
    <>
    <button type="submit">{buttonText}</button>
    </>
  )
}

export default Button