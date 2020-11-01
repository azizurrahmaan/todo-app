import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import { useForm } from "react-hook-form";
import * as ERROR_MESSAGES from '../../services/validation/validationMessages'
import TaskRequest from '../../requests/TaskRequest'
import TaskValidator from '../../services/validation/TaskValidator'

function AddTaskForm({handleClose, selectedDate}) {
    
    const [fromTimeErrorMessage, setFromTimeErrorMessage] = React.useState(ERROR_MESSAGES.REQUIRED)
    const [toTimeErrorMessage, setToTimeErrorMessage] = React.useState(ERROR_MESSAGES.REQUIRED)
    const [fromTime, setFromTime] = React.useState()
    const [toTime, setToTime] = React.useState()    
    const { register, handleSubmit, errors, getValues } = useForm({mode: 'onBlur'});
    const formValues = getValues();

    const validateToTime = value => {
        const isValid = TaskValidator.validateFromTimeToTime(formValues['fromTime'], value)
        if(!isValid) { 
            setToTimeErrorMessage(ERROR_MESSAGES.MUST_BE_MORE_THAN_FROM_TIME);
        }else{
            setToTimeErrorMessage(ERROR_MESSAGES.REQUIRED);
        }
        return isValid;
    }
    const validateFromTime = value => {
        const isValid = TaskValidator.validateFromTimeToTime(value, formValues['toTime'])
        if(!isValid) { 
            setFromTimeErrorMessage(ERROR_MESSAGES.MUST_BE_LESS_THAN_TO_TIME);
        }else{
            setFromTimeErrorMessage(ERROR_MESSAGES.REQUIRED);
        }
        return true;
    }

    const onSubmit = data => {
        TaskRequest.add({...data, date: selectedDate.date})
        handleClose()
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container justify="space-around">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        inputProps={{name:"name",ref:register({required:true})}}
                        label="Task Name here..."
                        type="text"
                        helperText={ERROR_MESSAGES.REQUIRED}
                        error={errors.name?true:false}
                        fullWidth
                    />
                    <KeyboardTimePicker
                        margin="dense"
                        id="fromTime"
                        value={fromTime}
                        onChange={(value)=>{setFromTime(value)}}
                        inputProps={{name:"fromTime",ref:register({required:true, validate: validateFromTime})}}
                        label="From time"
                        helperText={fromTimeErrorMessage}
                        error={errors.fromTime?true:false}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="dense"
                        inputProps={{name:"toTime",ref:register({required:true, validate: validateToTime })}}
                        label="To time"
                        value={toTime}
                        onChange={(value)=>{setToTime(value)}}
                        helperText={toTimeErrorMessage}
                        error={errors.toTime?true:false}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="details"
                        label="Task Details here..."
                        type="text"
                        multiline={true}
                        inputProps={{name:"details", ref:register}}
                        fullWidth
                    />
                </Grid>
                <DialogActions>
                    <Button type="button" onClick={handleClose} color="secondary">
                        Discard
                    </Button>
                    <Button type="submit" color="primary">
                        Save
                    </Button>
                </DialogActions>
            </form>
        </MuiPickersUtilsProvider>
    );
}

const mapStateToProps = state => ({ selectedDate: state.selectedDate })

export default connect(mapStateToProps)(AddTaskForm);