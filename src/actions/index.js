import * as Types from '../constants/Action-Types';

export const AcToLogin = (username, password) => {
    return {
        type: Types.LOGIN,
        username,
        password
    }
}

export const AcToLogout = () => {
    return {
        type: Types.LOGOUT
    }
}