import React from 'react';
import Grid from '@material-ui/core/Grid';
import DatePickerForm from '../forms/DatePickerForm'
import AddTaskButton from '../tasks/AddTaskButton';
function TaskForm() {
    return (
        <Grid container justify="center">
            <AddTaskButton/>
            <DatePickerForm/>
        </Grid>
    );
}

export default TaskForm;