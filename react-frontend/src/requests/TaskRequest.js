import TaskHttp from '../Http/TaskHttp'
import TaskMutator from '../redux/mutators/TaskMutator'
import Snackbar from '../services/Snackbar'
import Backdrop from '../services/Backdrop'
import BootstrapTask from '../services/BootstrapTask'

const TaskRequest = {
    async add(data) {
        Backdrop.show()
        const { task } = await TaskHttp.add(BootstrapTask.toSend(data))
        if (task === undefined) {
            Backdrop.hide();
            return;
        }
        Backdrop.hide()
        Snackbar.success("Task added successfully.")

        TaskMutator.addTask(BootstrapTask.toReceive(task))
    },
    async fetch(date){
        Backdrop.show()
        const { tasks } = await TaskHttp.fetch(date)
        if(tasks === undefined || tasks.length == 0 ) {
            Snackbar.info("No tasks for the selected date.")
            TaskMutator.pullAll()
            Backdrop.hide();
            return;
        }
        TaskMutator.replaceTasks(BootstrapTask.toReceiveAll(tasks))
        Backdrop.hide()
    },
    async toggleCompleteAll(payload){
        Backdrop.show()
        const { isToggled } = await TaskHttp.toggleCompleteAll(payload)
        if(!isToggled) {
            Snackbar.info("No tasks toggled.")
            Backdrop.hide();
            return;
        }
        TaskMutator.toggleCompleteAll(payload.taskIds)
        TaskMutator.clearAllSelected()
        Backdrop.hide()
        Snackbar.info("Tasks toggled.")
    },
    async deleteAll(payload){
        Backdrop.show()
        const { isDeleted } = await TaskHttp.deleteAll(payload)
        if(!isDeleted) {
            Snackbar.info("No tasks deleted.")
            Backdrop.hide();
            return;
        }
        TaskMutator.deleteAll(payload.taskIds)
        TaskMutator.clearAllSelected()
        Backdrop.hide()
        Snackbar.info("All selected tasks were deleted.")
    },
}
export default TaskRequest