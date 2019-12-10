import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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

export default function Items(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {props.items.map((item) =>
                    <Grid item xs={12} sm={4} md={3} lg={2} key={item.id}>
                        <ItemCard item = {item}/>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}
