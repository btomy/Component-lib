import React from 'react'

const Revealable = ({  classNames, event }) =>

    <revealable
        className={classNames}
        onClick={event}>
        {children}
    </revealable>

Revealable.propTypes = {
    className: React.PropTypes.string
};

Revealable.defaultProps = {
    className: ''
};

export default Revealable;