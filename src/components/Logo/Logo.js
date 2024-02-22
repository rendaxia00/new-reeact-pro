import React, {PropTypes} from 'react';
import cx from 'classnames';

import logo from '../../resources/images/logo.png';
import logo_big from '../../resources/images/logo_big.png';

import './Logo.css';

const Logo = ({ big }) => {
    const src = big ? logo_big : logo;
    return (
        <div className='logo'>
            <img 
            src={src} 
            alt="SONM"
            className={cx('logo__image', {'logo__image_big': big})}
            />
        </div>
    )
};

Logo.defaultProps = {
    big: false
};

Logo.propTypes = {
    big: PropTypes.bool
};

export default Logo;