import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from '@material-ui/icons/Menu'
import Tab from "@material-ui/core/Tab"

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


    // const [state1, setState1] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // });
    //
    //
    // const toggleDrawer1 = (side, open) => event => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }
    //
    //     setState1({...state1, [side]: open});
    // };

    // const sideList = side => (
    //     <div
    //         className={classes.list}
    //         role="presentation"
    //         onClick={toggleDrawer1(side, false)}
    //         onKeyDown={toggleDrawer1(side, false)}
    //     >
    //         <List>
    //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //                 <ListItem button key={text}>
    //                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
    //                     <ListItemText primary={text}/>
    //                 </ListItem>
    //             ))}
    //         </List>
    //         <Divider/>
    //         <List>
    //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //                 <ListItem button key={text}>
    //                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
    //                     <ListItemText primary={text}/>
    //                 </ListItem>
    //             ))}
    //         </List>
    //     </div>
    // );

    // const fullList = side => (
    //     <div
    //         className={classes.fullList}
    //         role="presentation"
    //         onClick={toggleDrawer1(side, false)}
    //         onKeyDown={toggleDrawer1(side, false)}
    //     >
    //         <List>
    //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //                 <ListItem button key={text}>
    //                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
    //                     <ListItemText primary={text}/>
    //                 </ListItem>
    //             ))}
    //         </List>
    //         <Divider/>
    //         <List>
    //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //                 <ListItem button key={text}>
    //                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
    //                     <ListItemText primary={text}/>
    //                 </ListItem>
    //             ))}
    //         </List>
    //     </div>
    // );

    return (
        <AppBar position="static" className={classes.sectionMobile} color={"default"}>
            <Toolbar>
                <IconButton onClick={() => toggleDrawer(true)}>
                    <MenuIcon/>
                </IconButton>
                {props.value}
                <Drawer open={open} onClose={() => toggleDrawer(false)}>
                    {/*{sideList('left')}*/}
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