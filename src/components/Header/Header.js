import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShopIcon from "../../Icons/Shop"
import SvgIcon from "@material-ui/core/SvgIcon"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Categories from "../Categories/Categories"
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux'

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={
                            () => {
                                props.history.push("/")
                            }
                        }
                    >
                        <SvgIcon style={{color: 'white'}} fontSize={'large'}>
                            <ShopIcon/>
                        </SvgIcon>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        React Shop
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                    <div className={classes.grow}/>
                    <div className={classes.title}>
                        {`Total: ${props.total.toFixed(2)}€ `}
                    </div>
                    <div>
                        <IconButton color="inherit" onClick={
                            () => {
                                props.history.push("/cart")
                            }
                        }>
                            <Badge badgeContent={props.itemsInCart} color="secondary">
                                <ShoppingCartIcon/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Categories/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        itemsInCart: state.itemsInCart,
        total: state.total
    }
}
export default withRouter(connect(mapStateToProps)(Header))


