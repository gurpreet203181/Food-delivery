import * as tabActionTypes from "./tabActions";

const initiaState ={ 
    selectedTab:""
}   

const tabReducer = ( state = initiaState ,action) =>{
    switch(action.type){
        case tabActionTypes.SET_SELECTED_TAB:
            return{
                ...state, 
                selectedTab:action.payload.selectedTab
            }
            default: 
            return state
    }
}

export default tabReducer;