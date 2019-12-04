import React, {useState} from "react"
import Fab from "@material-ui/core/Fab"
import makeStyles from "@material-ui/core/styles/makeStyles"
import ChatIcon from '@material-ui/icons/Chat'
import Popover from "@material-ui/core/Popover"
import TextField from "@material-ui/core/TextField"
import Box from "@material-ui/core/Box"
import ChatContent from "./ChatContent"
import mockChat from "./mockChat"

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    chat: {
        height: 325,
        width: 280
    },
    content: {
        height: 230,
        margin: theme.spacing(2),
        overflow: 'auto'
    },
    chatInput: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    support: {
        color: 'blue',
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(1)
    },
    client: {
        color: 'green',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(1),
        textAlign: 'right'
    },

}));

export default function SupportChat() {
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

    const [chatInput, setChatInput] = useState('')
    const [chatContent, setChatContent] = useState([
        {
            role: 'support',
            text: 'Hello, can I help you?'
        }
    ])

    const onEnterKey = event => {
        if (event.key === 'Enter') {
            setChatContent([
                    ...chatContent,
                    {
                        role: 'client',
                        text: chatInput.trim()
                    },
                {
                        role: 'support',
                        text: mockChat(chatInput)
                    },

                ]
            )
            setChatInput('')
        }

    }


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
                <Box className={classes.chat}>
                    <ChatContent chatContent = {chatContent}/>
                    <Box className={classes.chatInput}>
                        <TextField variant={"outlined"}
                                   multiline
                                   rows={2}
                                   margin={"dense"}
                                   fullWidth
                                   label={'press Enter to submit'}
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                                   value={chatInput}
                                   onChange={e => {
                                       setChatInput(e.target.value)
                                   }}
                                   onKeyPress={onEnterKey}
                        />
                    </Box>
                </Box>
            </Popover>
        </>
    )
}

