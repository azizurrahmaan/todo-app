import React from 'react';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TaskRequest from '../../requests/TaskRequest'
import SelectedDate from '../../services/SelectedDate'
import {getDateOnly} from '../../services/DateTime'

function DatePickerForm({selectedDate}) {
    const [dateError, setDateError] = React.useState(false);

    const handleDateChange =  (date) => {
        if(date === "Invalid Date" || date === null){
            setDateError(true)
            return null
        }
        setDateError(false)
        SelectedDate.setDate(date)
        TaskRequest.fetch(getDateOnly(date))
    };
    
    return (
        <Grid item xs={12} md={3}>
            <Box marginY={2}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        style={{float:"right"}}
                        error={dateError}
                        inputProps={{name:"date"}}
                        id="date-picker-dialog"
                        label="Tasks for date"
                        format="MM/dd/yyyy"
                        value={selectedDate.object}
                        onChange={handleDateChange}
                        color="primary"
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Box>
        </Grid>
    );
}

const mapStateToProps = state => ({ selectedDate: state.selectedDate })

export default connect(mapStateToProps)(DatePickerForm);