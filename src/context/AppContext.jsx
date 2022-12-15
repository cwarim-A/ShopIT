import {createContext,useContext,useReducer} from "react"
import * as ACTIONS from "./actions"
import appReducer from "./appReducer"

const AppContext = createContext()

export const useAppContext = () =>{
    return useContext(AppContext)
};



const AppContextProvider = ({children}) => {
    const initialState = {
        users:null,
        products:null,
        search:"",
    }
    const [state,dispatch]= useReducer(appReducer,initialState);

    const handleInputChange=(field,value)=>{
        dispatch({type:ACTIONS.CHANGE_FIELD_VALUE,payload:{field,value}});
    };
  return (
    <AppContext.Provider value={{...state, dispatch,handleInputChange}}>
          {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
