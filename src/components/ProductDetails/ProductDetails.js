import React from "react"
import {makeStyles, Paper, TextField} from "@material-ui/core"
import Grid from '@material-ui/core/Grid'
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from "@material-ui/core/CardActionArea"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import AddShoppingCartIcon from "@material-ui/core/SvgIcon/SvgIcon"

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(3),
        margin: theme.spacing(3)
    },
    media: {
        backgroundSize: 'contain',
        height: '300px'
    }
}));

function ProductDetails(props) {
    const classes = useStyles()
    const {match, others} = props
    const id = match.params.id
    return (
        <Card className={classes.card}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <CardMedia
                        className={classes.media}
                        image="https://img.favpng.com/2/2/5/ipod-touch-apple-icon-image-format-icon-png-favpng-QvhiAM2p3i0AdfJAuQq2vKhsX.jpg"
                        title="Apple"
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ProductDetails