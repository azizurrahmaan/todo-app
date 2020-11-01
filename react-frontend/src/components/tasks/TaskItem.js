import { connect } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import Accordion from '@material-ui/core/Accordion';
import AccordionActions from '@material-ui/core/AccordionActions';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import Chip from '@material-ui/core/Chip';
import {toggleSelectTask} from '../../redux/actions/taskActions'


function TaskItem({task , selectedTaskIDs, dispatch}) {
  const handleTaskCheckboxClick = () => {
    dispatch(toggleSelectTask(task.id))
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        <FormControlLabel
          checked={selectedTaskIDs.includes(task.id)}
          aria-label="Acknowledge"
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          control={<Checkbox onChange={handleTaskCheckboxClick} />}
          label={<Typography color='initial'>{task.name} - {task.fromTime} to {task.toTime} {task.status === "COMPLETED"? (
            <Chip
              icon={<CheckIcon />}
              label="Completed"
              clickable
              color="primary"
            />
          ) : ''}</Typography>}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Typography color={task.details == ""? 'textSecondary': "textPrimary"}>{task.details == ""? 'No details' : task.details}</Typography>
      </AccordionDetails>
      {/* <Divider />
        <AccordionActions>
          <IconButton aria-label="delete" title="Edit" size="small">
            <EditIcon />
          </IconButton>
      </AccordionActions> */}
    </Accordion>
  );
}

const mapStateToProps = state => ({ selectedTaskIDs: state.selectedTaskIDs })

export default connect(mapStateToProps)(TaskItem);
