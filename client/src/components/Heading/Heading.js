import React from 'react';
import Styles from './Heading.module.css';

export default props => {
    const { mode='default' } = props;
    return (
        <h1 className={Styles[mode]}>Breweries</h1>
    )
};
