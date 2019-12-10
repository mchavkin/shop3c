import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {TextField} from "@material-ui/core"
import {withRouter} from "react-router-dom"
import * as actionTypes from '../../store/actions'
import {connect} from "react-redux"

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        height: 400
    },
    desc: {
        height: 100,
        overflow: 'hidden'
    },
    price: {
        height: 20,
    },
    media: {
        height: 140,
        backgroundSize: 'contain'
    },
});

function ItemCard(props) {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(1)
    const onQuantityChange = event => {
        const value = event.target.value
        setQuantity(value > 0 || null ? value : 0)
    }


    return (
        <Card className={classes.card}>
            <CardActionArea onClick={
                () => {
                    props.history.push("/details/" + props.item.id)
                }
            }
            >
                <CardMedia
                    className={classes.media}
                    image={props.item.imageURL}
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                        {props.item.description}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p" className={classes.price}>
                        {`Price: ${props.item.price.toFixed(2)}`}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <TextField value={quantity}
                           onChange={onQuantityChange}
                           label='Quantity'
                           type='number'
                           variant='outlined'
                           InputLabelProps={{
                               shrink: true,
                           }}/>
                <IconButton size="medium"
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                props.addItems(props.item, quantity)
                            }}>
                    <AddShoppingCartIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}


const mapDispatchToProps = dispatch => ({
    addItems: (item, quantity) => dispatch({type: actionTypes.ADD_ITEMS, item: item, quantity: quantity})
})

export default withRouter(connect(null, mapDispatchToProps)(ItemCard))
