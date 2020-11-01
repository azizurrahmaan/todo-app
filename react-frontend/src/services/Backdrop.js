import BackdropMutator from '../redux/mutators/BackdropMutator'

export default {
    show(message){
        BackdropMutator.show()
    },
    hide(message){
        BackdropMutator.hide()
    },
}