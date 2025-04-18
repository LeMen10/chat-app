import PropTypes from 'prop-types';
import React from 'react';
import className from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = className.bind(styles);
const DefaultLayout = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}></div>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
