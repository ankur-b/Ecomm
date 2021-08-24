import CreateDataContext from '../CreateDataContext';
import SHOP_DATA from './Shopdata';
const shopReducer = (state,action)=>{
    switch(action.type){
        default:
            return state
    }
}
export const {Provider ,Context} = CreateDataContext(shopReducer,{},{
    collections:SHOP_DATA
})
