import React from "react"
import Fab from "@material-ui/core/Fab"
import makeStyles from "@material-ui/core/styles/makeStyles"
import ChatIcon from '@material-ui/icons/Chat'
import Popover from "@material-ui/core/Popover"
import {Paper} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    chat:{
        height: 320,
        width: 280
    }
}));

export default function ChatButton() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Fab href={'#'} className={classes.fab} color={"primary"} onClick={handleClick}>
                <ChatIcon/>
            </Fab>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <Paper className={classes.chat}>The content of the Popover.</Paper>
            </Popover>
        </>
    )
}

