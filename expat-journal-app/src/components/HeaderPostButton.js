import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles, Tooltip, Fab} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
    postBtn: {
    }
    })

function HeaderPostButton(props) {
    const classes = useStyles()

    const { editing } = props;
    console.log(editing);
    return (
        <div>
            <Tooltip  title="Add" aria-label="add" placement="right">
                <Fab color="primary" className={classes.fab}>
                <AddCircleIcon placement='right' />
                </Fab>
            </Tooltip>
        </div>
    )
}

export default HeaderPostButton
