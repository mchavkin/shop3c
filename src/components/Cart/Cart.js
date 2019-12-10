import React from "react"
import Button from "@material-ui/core/Button"
import {withRouter} from "react-router-dom"
import makeStyles from "@material-ui/core/styles/makeStyles"
import {Paper} from "@material-ui/core"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import {connect} from "react-redux"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import IconButton from "@material-ui/core/IconButton"
import QuantityInput from "../QuantityInput/QuantityInput"
import * as actionTypes from "../../store/actions"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => ({
    header: {
        textAlign: 'center'
    },
    root: {
        width: '90%',
        margin: 'auto',
        overflowX: 'auto',
    },
    button: {
        float:'right'
    }
}))

function Cart(props) {
    const classes = useStyles()
    return (
        <>
            <h1 className={classes.header}>Your Cart</h1>
            <Paper className={classes.root}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell align="center" colSpan={3}>Desc</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Sum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.items.map((item) => {
                            return (
                                <TableRow key={item.item.id}>
                                    <TableCell style={{width: '200px'}}>
                                        <IconButton onClick={() => props.removeItem(item)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                        <QuantityInput quantity={item.qty}/>
                                    </TableCell>
                                    <TableCell>
                                        <img src={item.item.imageURL} alt={item.name} height={60} width={60}/>
                                    </TableCell>
                                    <TableCell>
                                        {item.item.name}
                                    </TableCell>
                                    <TableCell>
                                        {item.item.description}
                                    </TableCell>
                                    <TableCell align="right">{item.item.price.toFixed(2)}</TableCell>
                                    <TableCell align="right">{(item.qty * item.item.price).toFixed(2)}</TableCell>
                                </TableRow>)
                        })}
                        <TableRow>
                            <TableCell colSpan={3}/>
                            <TableCell align={"left"}>
                                Total:
                            </TableCell>
                            <TableCell colSpan={2} align={"right"}>
                                {props.total.toFixed(2)}
                            </TableCell>
                        </TableRow>

                    </TableBody>

                </Table>

            </Paper>
            <Box component={'div'} p={3} className={classes.root}>
                <Button variant="contained" color="primary" className={classes.button}>
                    Checkout
                </Button>
            </Box>
        </>
    )

}

const mapStateToProps = state => ({
    items: Object.values(state.items),
    total: state.total
})

const mapDispatchToProps = dispatch => ({
    removeItem: (item) => dispatch({type: actionTypes.REMOVE_ITEM, item: item}),
    incrementItem: (item) => dispatch({type: actionTypes.ADD_ITEMS, item: item, quantity: 1}),
    decrementItem: (item) => dispatch({type: actionTypes.ADD_ITEMS, item: item, quantity: -1})
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))