// global state disini
const init_state = {
    id: 0,
    username: "",
    password: "",
    role: "",
    fullName: "",
    errMsg: ""
}

export default (state = init_state, action) => { //mengubah init state
    if (action.type === "ON_CHANGE_USER_INPUT"){
        return{ ...state, username: action.payload }
    }
    else if (action.type === "ON_LOGIN_SUCCESS") {
        const {username, fullName, id, role } = action.payload
        return { 
            ...state, 
            username: username,//namanya sama  
            fullName, 
            id, 
            role 
        };
    }
    else if (action.type === "ON_LOGOUT_SUCCESS") {
        const {username, fullName, id, role, password } = action.payload
        return { 
            ...state, 
            username: username,//namanya sama  
            fullName, 
            id, 
            role,
            password
        };
    } 
    else if (action.type === "ON_LOGIN_FAIL") {
        return {
            ...state, 
            errMsg: action.payload,
        };
    } 
    else if (action.type === "ON_REGIS_SUCCESS") {
        return { ...state, errMsg: action.payload };
    }
    else if (action.type === "ON_REGIS_FAIL") {
        return { ...state, errMsg: action.payload };
    }  
    else {
        return {...state};
    }
};