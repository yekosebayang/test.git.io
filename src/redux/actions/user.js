// disini yang nentuin apa yang dikirim ke global state
import Axios from 'axios'
import { API_URL } from '../../constants/API'

export const userInputHandler = (text) => {
    return{
        type: "ON_CHANGE_USER_INPUT",
        payload: text
    }
}

export const loginHandler = (userData) => {
    return (dispatch) => { // anggap dispatch = return
        const {username, password} = userData

        Axios.get(`${API_URL}users` ,{
            params: {
                username: username,//kalo sama namanya, disatuin aja,
                password,//seperti ini
            }
        })
        .then(res => {
            console.log(res)
            if (res.data.length>0){
                dispatch({
                    type: "ON_LOGIN_SUCCESS",
                    payload: res.data[0]
                })
            }
            else {
                dispatch({
                    type: "ON_LOGIN_FAIL",
                    payload: "Username atau password salah"
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
        
        // dispatch({
        //     type: "TESTING",
        //     payload: "Hello World!"
        // })
        // dispatch({
        //     type: "TESTING2",
        //     payload: "Hello Dunia!"
        // })
        
    }
}

export const registerHandler = (userData) => {
    return (dispatch) => { // anggap dispatch = return
        const {username, password, role, fullName} = userData

        Axios.get(`${API_URL}users` ,{
            params: {
                username,
            }
        })
        .then(res => {
            console.log(res)
            if (res.data.length==0){
                Axios.post(`${API_URL}users`,{
                    username,
                    password,
                    fullName,
                    role
                })
                dispatch({
                    type: "ON_REGIS_SUCCESS",
                    payload: `Registrasi username ${username} berhasil`
                })
            }
            else {
                dispatch({
                    type: "ON_REGIS_FAIL",
                    payload: `Username ${username} sudah terdaftar`
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
}}