import React from 'react'

function Label() {
    return (
        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
        </div>
    )
}

export default Label