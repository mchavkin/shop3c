import React, {useEffect, useRef} from "react"
import Box from "@material-ui/core/Box"
import {Paper} from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({

    content: {
        height: 230,
        margin: theme.spacing(2),
        overflow: 'auto'
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

export default function ChatContent(props) {
    const classes = useStyles()
    const endOfChat = useRef(null)

    useEffect(() => {
        endOfChat.current.scrollIntoView()
    })

    return (
        <>
            <Paper className={classes.content}>
                {props.chatContent.map((line, index) => (
                        <Box component={'p'} className={classes[line.role]} key={index}>
                            {line.text}
                        </Box>
                    )
                )}
                <div id='endOfChat' style={{float: "left", clear: "both"}}
                     ref={endOfChat}>
                </div>
            </Paper>
        </>
    )


}