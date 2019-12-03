import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ItemCard from "./ItemCard"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100px'
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {new Array(15).fill(0).map((_, i) =>
                    <Grid item xs={12} sm={4} md={2} key={i}>
                        {/*<Paper className={classes.paper}>{`index ${i}`}</Paper>*/}
                        <ItemCard/>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}
