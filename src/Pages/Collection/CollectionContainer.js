import React,{useContext} from "react";
import { selectIsCollectionsLoaded } from "../../Context/Shop/ShopSelector";
import { Context as ShopContext} from "../../Context/Shop/ShopContext";
import Collection from "./Collection";
const CollectionContainer = (props)=>{
    const {state} = useContext(ShopContext);
    const isLoading = !selectIsCollectionsLoaded(state)
    return(
        <div>
            <Collection isLoading={isLoading} {...props}/>
        </div>
    )
}
export default CollectionContainer;