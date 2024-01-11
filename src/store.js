import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import axios from "axios";

const useAuth = create(devtools(persist((set, get) => ({
    user: [],
    error:'',
    firstEnter: false,
    showErrorModal:false,
    errorEnterCounter: 0,
    isAuth:false,
    loading:false,
    authUser: async (user)=> {
        set({loading: true})
        try {
            const res = await axios.get(`http://localhost:8080/user/?userlogin=${user.userlogin}`)
            if (res.status !== 200) {
                throw new Error('error request')
            }
            console.log(res.data)
            if (res.data[0]?.userpass === 'admin' && user.userpass === 'admin'
                && res.data[0]?.userlogin=== 'admin' &&  user.userlogin === 'admin') {
                set({error : ''})
                set({isAuth: false})
                set({firstEnter: true})
                set({loading: false})
            }
            if (res.data[0]?.userpass === user.userpass && res.data[0]?.userlogin === user.userlogin) {
                set({error : ''})
                set({isAuth: true})
                set({loading: false})
            } else {
                set({error : 'Неправильный логин или пароль'})
                set({errorEnterCounter : +1 })
                set({showErrorModal: true})
                set({loading: false})
            }
            return res.data
        } catch (error) {
            set({loading: false})
            console.log(error)
            return error.message
        }
    },
    setNewPass: async (user) => {
        set({loading: true})
        try {
            const res = await axios.post(`http://localhost:8080/user/?userlogin=${user.userlogin}` , user)
            if (res.status !== 200) {
                throw new Error('error request')
            }
            console.log(res.data)
            return res.data
        } catch (error) {
            set({loading: false})
            console.log(error)
            return error.message
        }
    },
    hideModal: () => {set({showErrorModal:false,})}
}), { name: 'auth' })))

export default useAuth
