import {convertTime12to24, convertTime24To12} from './DateTime'

export default {
    toSend(task) {
        return {
            ...task,
            to_time: convertTime12to24(task.toTime),
            from_time: convertTime12to24(task.fromTime)
        }
    },
    toReceive(task) {
        return {
            ...task,
            toTime: convertTime24To12(task.to_time),
            fromTime: convertTime24To12(task.from_time)
        }
    },
    toReceiveAll(tasks) {
        return tasks.map(task => this.toReceive(task))
    }
}