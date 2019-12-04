import React, {useState} from "react"
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MobileMenu from "./MobileMenu"
import {data} from '../../data/data'
import {withRouter} from "react-router-dom"

const productCategories = data.products.reduce((res, product) =>
    res.includes(product.category) ? res : res.concat(product.category), ["All products"])

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

function Categories(props) {
    const classes = useStyles();
    const [value, setValue] = useState(productCategories[0])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.history.push("All products" === newValue ? "/" : "/category/" + newValue)
    }

    return (
        <>
            <MobileMenu className={classes.sectionMobile}
                        categories={productCategories}
                        value={value}
                        onChange={handleChange}/>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    className={classes.sectionDesktop}
                >
                    {
                        productCategories.map(cat =>
                            <Tab label={cat} key={cat} value={cat}/>
                        )
                    }
                </Tabs>
            </AppBar>

        </>
    );
}

export default withRouter(Categories)