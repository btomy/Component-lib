import React from 'react'

const Callout = ({  classNames, event }) =>

    <callout
        className={classNames}
        onClick={event}>
        {children}
    </callout>

Callout.propTypes = {
    className: React.PropTypes.string
};

Callout.defaultProps = {
    className: ''
};

export default Callout;