import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Items from "../Items/Items"

export default function ProductList(props) {
    // const {children, ...other} = props;

    return (
        <Typography
            component="div"
        >
            <Box p={3}>
                <Items/>
            </Box>
        </Typography>
    );
}