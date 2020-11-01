import TaskItem from './TaskItem'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function TaskList({tasks}) {
    const taskItems = tasks.length ? (
        tasks.map(task => (<TaskItem task={task} key={task.id} />))
    ) : (
        <Box marginTop={12}>
            <Typography align="center" color="textSecondary">No tasks available.</Typography>
        </Box>
    )
    return (
        <Grid container justify="center">
            <Grid item xs={12} md={6}>
                <Box marginTop={3}>
                    {taskItems}
                </Box>
            </Grid>
        </Grid>
    );
}

export default TaskList;