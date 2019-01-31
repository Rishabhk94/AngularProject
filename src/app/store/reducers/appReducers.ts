import { OPEN_SIDEBAR,CLOSE_SIDEBAR } from '../actions/appActions';

interface appReducerState {
    sideBarOpen: boolean
}

const initialState:appReducerState = {
    sideBarOpen: false
}

export function reducer(state = initialState,action):appReducerState{
    switch(action.type){
        case OPEN_SIDEBAR:
        return {
            ...state,
            sideBarOpen: true
        }
        case CLOSE_SIDEBAR:
        return {
            ...state,
            sideBarOpen: false
        }
    }
    return state;
}