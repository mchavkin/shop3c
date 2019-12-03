import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

export default function ProductList(props) {
    const {children, ...other} = props;

    return (
        <Typography
            component="div"
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}