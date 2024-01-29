import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import axios from "axios";

const useAuth = create(devtools(persist((set, get) => ({
    user: [],
    error:null,
    firstEnter: false,
    showErrorModal:false,
    errorEnterCounter: 0,
    isAuth:false,
    loading:false,
    attentionMessage:'',
    resetErrorEnterCounter: () => set((state) => ({errorEnterCounter: 0})),
    authUser: async (user)=> {
        set({loading: true})
        set({error : null})
        try {
            const res = await axios.get(`http://localhost:8080/user/?userlogin=${user.userlogin}`)
            if (res.status !== 200) {
                throw new Error('error request')
            }
            console.log(res.data)
            if (res.data[0]?.userpass === 'admin' && user.userpass === 'admin'
                && res.data[0]?.userlogin=== 'admin' &&  user.userlogin === 'admin') {
                set({error : null})
                set({isAuth: false})
                set({firstEnter: true})
                set({loading: false})
            }
            if (res.data[0]?.userpass === user.userpass && res.data[0]?.userlogin === user.userlogin) {
                set({error : null})
                set({isAuth: true})
                set({loading: false})

            } else {
                set({error : 'Неправильный логин или пароль'})
                set({showErrorModal: true})
                set({loading: false})
                set({errorEnterCounter: 3})
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

export default useAuth;

export const useConversation = create(devtools((set)=>({
    filterModal : false,
    conditions : [],
    records: [
        {
            date :new Date(2020, 1, 18),
            callingNum : '123-11-11',
            callingOst : 1,
            answerNum : '147-88-52',
            answerOst: 2,
            duration : '85s',
            actions : 'action',
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
            id: Math.random()
        },
        {
            date :new Date(2024, 1, 27),
            callingNum : '222-11-11',
            callingOst : 5,
            answerNum : '297-88-52',
            answerOst: 3,
            duration : '41s',
            actions : 'action',
            src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
            id: Math.random()
        },
        {
            date :new Date(2022, 1, 27),
            callingNum : '322-11-09',
            callingOst : 5,
            answerNum : '397-12-52',
            answerOst: 3,
            duration : '1s',
            actions : 'action',
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
            id: Math.random()
        },
        {
            date :new Date(2020, 1, 18),
            callingNum : '423-11-11',
            callingOst : 1,
            answerNum : '447-88-52',
            answerOst: 2,
            duration : '85s',
            actions : 'action',
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
            id: Math.random()
        },
        {
            date :new Date(2024, 1, 27),
            callingNum : '522-11-11',
            callingOst : 5,
            answerNum : '597-88-52',
            answerOst: 3,
            duration : '41s',
            actions : 'action',
            src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
            id: Math.random()
        },
        {
            date :new Date(2022, 1, 27),
            callingNum : '622-11-09',
            callingOst : 5,
            answerNum : '697-12-52',
            answerOst: 3,
            duration : '1s',
            actions : 'action',
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
            id: Math.random()
        },
    ],
    resetFilter: false,
    confirmReset:false,
    downloadRecord:false,
    playerModal:false,
    currentRecord:'',
    downloadSuccessModal:false,
    deleteSuccessModal:false,
    showDownloadSuccessModal: ()=> {set({downloadSuccessModal: true})},
    hideDownloadSuccessModal: ()=> {set({downloadSuccessModal: false})},
    showDeleteSuccessModal: ()=> {set({deleteSuccessModal: true})},
    hideDeleteSuccessModal: ()=> {set({deleteSuccessModal: false})},
    showFilterModal: ()=> {set({filterModal: true})},
    hideFilterModal: ()=> {set({filterModal: false})},
    isResetFilter: ()=> {set({resetFilter: true})},
    showConfirmReset: () => {set({confirmReset: true})},
    hideConfirmReset: () => {set({confirmReset: false})},
    addCondition: () => set(state => ({conditions: [...state.conditions  , {id: Math.random() ,numFrom : '' ,numTo:'' }]})),
    deleteCondition: (id) =>
        set((state) => ({
            conditions: state.conditions.filter((condition) => condition.id !== id)
        })),
    showDownloadRecord:()=>{set({downloadRecord: true})},
    hideDownloadRecord:()=>{set({downloadRecord: false})},
    showPlayerModal: ()=> {set({playerModal: true})},
    hidePlayerModal: ()=> {set({playerModal: false})},
    setCurrentRecord:(id) =>
        set((state) => ({
            currentRecord: state.records.filter((record) => record.id === id)
        })),
    deleteCurrentRecord:(id) =>
        set((state) => ({
            records: state.records.filter((record) => record.id !== id)
        })),
})))



export const useGroupsAndUsers = create(devtools((set, get) => ({
    groups:[],
    numbers:[],
    addGroupModal:false,
    blockMessage:false,
    addGroup: (name) => set(state => ({groups: [...state.groups  , {id: Math.random() ,groupName: name }]})),
    showAddGroupModal: ()=> {set({addGroupModal: true})},
    hideAddGroupModal: ()=> {set({addGroupModal: false})},
    showBlockMessage: ()=> {set({blockMessage: true})},
    hideBlockMessage: ()=> {set({blockMessage: false})},
    addNumbers: () => set(state => ({
        numbers: [...state.numbers  , {id: Math.random() ,numberFrom:'' , numberTo: '' }]})),
    deleteNumbers:(id) =>
        set((state) => ({
            numbers: state.numbers.filter((number) => number.id !== id)
        })),
}), { name: 'groups' }))




