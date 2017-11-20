import React from 'react'

const Notices = ({  classNames, event }) =>

    <notices
        className={classNames}
        onClick={event}>
        {children}
    </notices>

Notices.propTypes = {
    className: React.PropTypes.string
};

Notices.defaultProps = {
    className: ''
};

export default Notices;