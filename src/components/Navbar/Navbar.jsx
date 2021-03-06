import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge,  Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
//import { Link, useLocation } from 'react-router-dom';

import logo from '../../assests/commerce.png';
import useStyles from './styles';

const Navbar = () => {
    const classes=useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color = "inherit">
                <Toolbar>
                    <Typography variant = "h6" className={classes.appBar} color = "inherit" >
                        <img src = {logo} alt = "Commerce.js" height="25px" className= {classes.image} />
                        Commerce.js
                    </Typography>
                    <div className = {classes.grow}/>
                    <div className = {classes.button}>
                        <IconButton aria-label="Show card items" color="inherit ">
                            <Badge badgeContent={2} color="secondary" >
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
