import React from 'react';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import TaskRequest from '../../requests/TaskRequest'

function OtherActions({selectedTaskIDs}) {
    const handleDeleteClick = event => {
        TaskRequest.deleteAll({taskIds:selectedTaskIDs})
    }
    const handleMarkCompleteClick = event => {
        TaskRequest.toggleCompleteAll({taskIds:selectedTaskIDs})
    }
    return (
        <Grid container justify="center">
            <Grid item xs={12} md={6}>
                <Box marginY={2} >
                    <Button
                        onClick={handleDeleteClick}
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon fontSize="large" />}
                    >
                        Delete
                    </Button>
                    <span style={{minWidth:"10px", display: "inline-block"}}></span>
                    <Button
                        onClick={handleMarkCompleteClick}
                        variant="contained"
                        startIcon={<CheckIcon fontSize="large" />}
                    >
                        Toggle Complete
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}
const mapStateToProps = state => ({ selectedTaskIDs: state.selectedTaskIDs })

export default connect(mapStateToProps)(OtherActions);