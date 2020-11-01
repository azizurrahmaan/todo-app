import { connect } from 'react-redux'
import TaskList from './TaskList'
import TaskForm from '../forms/TaskForm'
import OtherActions from './OtherActions'

import React from 'react';

function Tasks({tasks, selectedTaskIDs}) {
    return (
        <>
            {
            selectedTaskIDs.length ? 
            ( <OtherActions/> ) :
            ( <TaskForm/> )
            }
            <TaskList tasks={tasks} />
        </>
    );
}

const mapStateToProps = state => ({ tasks: state.tasks, selectedTaskIDs: state.selectedTaskIDs })

export default connect(mapStateToProps)(Tasks);