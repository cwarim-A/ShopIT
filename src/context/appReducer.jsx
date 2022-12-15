import * as ACTIONS from "./actions"

const appReducer = (state,action)=>{
    switch (action.type){
       case ACTIONS.CHANGE_FIELD_VALUE:
        return{
            ...state,
            [action.payload.field] : action.payload.value
        } 
        default:
        return state;
    }
};

export default appReducer