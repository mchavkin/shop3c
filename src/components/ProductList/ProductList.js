import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Items from "../Items/Items"
import {data} from "../../data/data"

export default function ProductList(props) {
    const items = !!props.cat ?
        data.products.filter(product => props.cat === product.category) : data.products
    return (
        <Typography
            component="div"
        >
            <Box p={3}>
                <Items items={items}/>
            </Box>
        </Typography>
    );
}