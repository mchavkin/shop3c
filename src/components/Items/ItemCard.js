import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import QuantityInput from "../QuantityInput/QuantityInput"
import {TextField} from "@material-ui/core"

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        height: 400
    },
    desc: {
        height: 120,
        overflow: 'hidden'
    },

    media: {
        height: 140,
        backgroundSize: 'contain'
    },
});

export default function ItemCard() {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(1)
    const onQuantityChange = event => {
        setQuantity(event.target.value)
    }


    return (
        <Card className={classes.card}>
            <CardActionArea onClick={()=>{alert('clicked')}}>
                <CardMedia
                    className={classes.media}
                    image="https://img.favpng.com/2/2/5/ipod-touch-apple-icon-image-format-icon-png-favpng-QvhiAM2p3i0AdfJAuQq2vKhsX.jpg"
                    title="Apple"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
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
                <IconButton size="medium" variant="contained" color="primary">
                    <AddShoppingCartIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
