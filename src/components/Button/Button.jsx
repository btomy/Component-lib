import React from 'react'

const Button = ({
    children,
    type,
    classNames,
    event,
    disabled
}) =>
    <button
        type={type}
        className={classNames}
        onClick={event}
        disabled={disabled}>
        {children}
    </button>

export default Button;
