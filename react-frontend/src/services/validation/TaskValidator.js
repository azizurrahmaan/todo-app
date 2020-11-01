import {convertTime12to24} from '../DateTime'
export default {
    validateFromTimeToTime(fromTime, toTime){
        const fromTime24Hour = convertTime12to24(fromTime);
        const toTime24Hour = convertTime12to24(toTime);
        return fromTime24Hour < toTime24Hour
    }
}