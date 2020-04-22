// global state disini
const init_state = {
    id: 0,
    username: "Kamu siapa? ayo login!",
    role: "",
    fullName: "",
    password: "",
    errMsg: ""
}

export default (state = init_state, action) => {
    if (action.type === "ON_CHANGE_USER_INPUT"){
        return{ ...state, username: action.payload }
    }
    else if (action.type === "ON_LOGIN_SUCCESS") {
        const {username, fullName, id, role } = action.payload
        return { ...state, 
            username: username,//namanya sama  
            fullName, 
            id, 
            role 
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



// else if (action.type === "TESTING") {
    //     return { ...state, testing: action.payload };
    // } 
    // else if (action.type === "TESTING2") {
    //     return { ...state, testing2: action.payload };
    // }  