import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}))

export default function MobileMenu(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false)
    const toggleDrawer = openDrawer => {
        setOpen(openDrawer)
    }

    const onClick = cat => {
        props.onChange(null, cat)
        toggleDrawer(false)
    }

    return (
        <AppBar position="static" className={classes.sectionMobile} color={"default"}>
            <Toolbar>
                <IconButton onClick={() => toggleDrawer(true)}>
                    <MenuIcon/>
                </IconButton>
                {props.value}
                <Drawer open={open} onClose={() => toggleDrawer(false)}>
                    <div
                        className={classes.list}
                        role="presentation"
                    >
                        <List>
                            {props.categories.map(cat =>
                                <ListItem button key={cat}>
                                    <ListItemText primary={cat} onClick={() => onClick(cat)}/>
                                </ListItem>
                            )}
                        </List>
                    </div>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}