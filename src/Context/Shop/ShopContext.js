import CreateDataContext from '../CreateDataContext';
const shopReducer = (state,action)=>{
    switch(action.type){
        case "UPDATE_COLLECTIONS":
            return {...state,collections:action.payload}
        default:
            return state
    }
}
const updateCollections = dispatch=>(collectionsMap)=>{
    dispatch({type:'UPDATE_COLLECTIONS',payload:collectionsMap})
} 
export const {Provider ,Context} = CreateDataContext(shopReducer,{updateCollections},{
    collections:null
})
