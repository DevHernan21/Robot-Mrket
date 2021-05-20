import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import  useStyles  from './StylesNav';
import Search from '../Search/Search';



const Navbar = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar possition='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        Robot Market
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.search}>
                        <Search />
                    </div>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton arial-label='Show Cart items' color='items'>
                            <Badge badgeContent={8} color='secondary'>
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

