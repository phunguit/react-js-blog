import * as Types from '../constants/Action-Types';

var defaultState = {
    isLogin: false,
    username: null
}

const checkLogin = (username, password) => {
    if(username !== 'admin' && password !== '123') {
        return false;
    }

    return true;
}

const user = (state = defaultState, action) => {

    switch(action.type) {
        case Types.LOGIN:
            var { username, password } = action;

            if(checkLogin(username, password)) {
                state = {
                    isLogin: true,
                    username
                }
            }
            return [...state];

        case Types.LOGOUT:
            state = {
                isLogin: false,
                username: null
            }
            return [...state];
            
        default:
            return [...state];
    }

}

export default user;