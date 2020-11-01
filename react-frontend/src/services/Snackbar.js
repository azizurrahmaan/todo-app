import SnackbarMutator from '../redux/mutators/SnackbarMutator'

export default {
    success(message){
        SnackbarMutator.success(message)
    },
    info(message){
        SnackbarMutator.info(message)
    },
    error(message){
        SnackbarMutator.error(message)
    }
}