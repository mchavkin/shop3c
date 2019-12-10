import React, {useState} from "react"
import {Box} from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import DecreaseIcon from '@material-ui/icons/ChevronLeft';
import IncreaseIcon from '@material-ui/icons/ChevronRight';

export default function QuantityInput(props) {
    const [quantity, setQuantity] = useState(props.quantity)
    const onChange = event => {setQuantity(event.target.value)}
    const increase = () => {
        setQuantity(quantity + 1)
        // props.increment()
    }
    const decrease = () => {
        // props.decrement()
        setQuantity(quantity - 1)}
    return (
        <Box component={'span'}>
            <IconButton onClick={decrease}>
                <DecreaseIcon/>
            </IconButton>

            <TextField variant={"outlined"}
                       style={{width: '50px'}}
                       margin={"dense"}
                       value={quantity}
                       onChange={onChange}/>
            <IconButton onClick={increase}>
                <IncreaseIcon/>
            </IconButton>
        </Box>
    )
}