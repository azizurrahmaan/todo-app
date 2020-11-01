import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import AddTaskDialog from '../dialogs/AddTaskDialog'
import Box from '@material-ui/core/Box';
function AddTaskButton(props) {
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const setClose = () => {
        setOpen(false);
    }
    
    return (
        <Grid item xs={12} md={3}>
            <Box marginY={2}>
                <Button
                    onClick={handleClickOpen}
                    variant="contained"
                    color="primary"
                    startIcon={<Add fontSize="large" />}
                >
                    Add Task
                </Button>
            </Box>
            <AddTaskDialog open={open} setClose={setClose} />
        </Grid>
    );
}

export default AddTaskButton;