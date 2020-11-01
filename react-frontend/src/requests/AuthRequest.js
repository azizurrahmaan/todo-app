import AuthHttp from '../Http/AuthHttp'
import history from '../services/History'
import LocalStorage from '../services/LocalStorage'
import Cookie from '../services/Cookie'
import AuthMutator from '../redux/mutators/AuthMutator'
import AuthToken from '../services/AuthToken'
import UserMutator from '../redux/mutators/UserMutator'
import Snackbar from '../services/Snackbar'
import Backdrop from '../services/Backdrop'
const AuthRequest = {
    async signup(data) {
        Backdrop.show()
        const { user, token } = await AuthHttp.register(data)
        if (token === undefined) {Backdrop.hide();return;}
        Backdrop.hide()
        Snackbar.success("You have signed up successfully.")
        LocalStorage.authToken.set(token)
        Cookie.authToken.set(token)
        AuthMutator.replaceToken(token)

        UserMutator.replaceUser(user)

        history.push('/home')
    },
    
    async signin(data) {
        Backdrop.show()
        const { user, token } = await AuthHttp.login(data)
        if (token === undefined) {Backdrop.hide();return;}
        Backdrop.hide()
        Snackbar.success("You have signed in successfully.")
        LocalStorage.authToken.set(token)
        Cookie.authToken.set(token)
        AuthMutator.replaceToken(token)

        UserMutator.replaceUser(user)

        history.push('/home')
    },
    
    async signout() {
        Backdrop.show()
        const { isLogout } = await AuthHttp.logout()
        if (!isLogout) {Backdrop.hide();return;}
        AuthToken.remove()
        setTimeout(() => {
            history.push('/signin')
            Snackbar.success("You have signed out successfully.")
            Backdrop.hide()
        }, 1000);
    },

    async user() {
        Backdrop.show()
        const { user, token } = await AuthHttp.user()
        if (token === undefined) {Backdrop.hide();return;}
        Backdrop.hide()
        LocalStorage.authToken.set(token)
        Cookie.authToken.set(token)
        AuthMutator.replaceToken(token)

        UserMutator.replaceUser(user)
    }
}

export default AuthRequest