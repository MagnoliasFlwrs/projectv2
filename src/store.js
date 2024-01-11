import {create} from "zustand";
import {devtools} from "zustand/middleware";
import axios from "axios";

export const useAuth = create(devtools((set => ({
    user: [],
    error:'',
    firstEnter: false,
    showErrorModal:false,
    errorEnterCounter: 0,
    isAuth:false,
    authUser:async  (user) => {
        try {
            const res = await axios.get(`http://localhost:8080/user/?userlogin=${user.userlogin}`)
            if (res.status !== 200) {
                throw new Error('error request')
            }
            console.log(res.data)
            if (res.data[0]?.userpass === user.userpass === 'admin' && res.data[0]?.userlogin === user.userlogin === 'admin') {
                set({error : ''})
                set({isAuth: false})
                set({firstEnter: true})
            }
            if (res.data[0]?.userpass === user.userpass && res.data[0]?.userlogin === user.userlogin) {
                set({error : ''})
                set({isAuth: true})
            } else {
                set({error : 'Неправильный логин или пароль'})
                set({errorEnterCounter : +1 })
            }
            return res.data
        } catch (error) {
            console.log(error)
            return error.message
        }
    }
}))))