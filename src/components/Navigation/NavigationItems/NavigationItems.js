import React from 'react'
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            { props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
            { !props.isAuthenticated 
                ? <NavigationItem link="/auth">Login</NavigationItem>
                : <NavigationItem link="/logout">Logout</NavigationItem>}
        </ul>
    )
}

export default NavigationItems