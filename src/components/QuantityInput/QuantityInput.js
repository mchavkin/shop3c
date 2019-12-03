import React, {useState} from "react"
import {Box} from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Input from "@material-ui/core/Input"

export default function (props) {
    const [quantity, setQuantity] = useState(1)
    const onChange = diff => setQuantity(quantity + diff)
    return (
        <Box component={'span'}>
            <IconButton onClick={() => onChange(-1)}>
                <ArrowLeftIcon/>
            </IconButton>
            <Input value={quantity} onChange={onChange}/>
            <IconButton onClick={() => onChange(1)}>
                <ArrowRightIcon/>
            </IconButton>
        </Box>
    )
}