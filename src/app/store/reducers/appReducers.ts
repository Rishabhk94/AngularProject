import { OPEN_SIDEBAR,CLOSE_SIDEBAR, OPEN_ADD_TECH, CLOSE_ADD_TECH } from '../actions/appActions';

interface appReducerState {
    sideBarOpen: boolean,
    addTechOpen: boolean
}

const initialState:appReducerState = {
    sideBarOpen: false,
    addTechOpen: false
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
        case OPEN_ADD_TECH:
        return {
            ...state,
            addTechOpen: true
        }
        case CLOSE_ADD_TECH:
        return {
            ...state,
            addTechOpen: false
        }
    }
    return state;
}