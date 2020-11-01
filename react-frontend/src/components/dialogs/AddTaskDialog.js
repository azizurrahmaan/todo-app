import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddTaskForm from '../forms/AddTaskForm'


export default function FormDialog({open, setClose}) {
  
    const handleClose = () => {
        setClose();
    };


    return (
        <Dialog fullWidth={true} maxWidth="sm" open={open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
            <DialogContent>
                <AddTaskForm handleClose={handleClose} />
            </DialogContent>
        </Dialog>  
    );
}