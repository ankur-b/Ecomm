import React ,{useContext} from 'react';
import CollectionsOverview from "./CollectionsOverview";
import { Context as ShopContext } from '../../Context/Shop/ShopContext';
import { selectIsCollectionFetching } from '../../Context/Shop/ShopSelector';

const CollectionsOverviewContainer = () =>{
    const {state} = useContext(ShopContext);
    const isLoading = selectIsCollectionFetching(state);
    return(
        <div>
            <CollectionsOverview isLoading={isLoading}/> 
        </div>
    )
}
export default CollectionsOverviewContainer;