import {getAuthUserData} from "./AuthReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"
const initialState = {
    initialized: false
}

export const AppReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}
type initializedACType = {
    type: typeof INITIALIZED_SUCCESS
}
const initializedSuccess = (): initializedACType => {
    return {type: INITIALIZED_SUCCESS }
}

export const initializeApp = () => (dispatch: any) => {
   let promise =  dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })
}



