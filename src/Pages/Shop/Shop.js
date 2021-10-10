import React,{useContext,useEffect} from 'react';
import {Route} from 'react-router-dom';
import {Context as ShopContext} from '../../Context/Shop/ShopContext';
import CollectionsOverviewContainer from '../../Components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionContainer from '../Collection/CollectionContainer';
import { selectIsCollectionsLoaded } from '../../Context/Shop/ShopSelector';
import './Shop.css';
const Shoppage = (props) =>{
    const {state,fetchCollectionsStartAsync} = useContext(ShopContext);
    const isCollectionsLoaded = selectIsCollectionsLoaded(state);
    useEffect(()=>{
        fetchCollectionsStartAsync()
    },[])
    return(
       <div className='shop-page'>
           <Route exact path={`${props.match.path}`} component={CollectionsOverviewContainer}/> 
           <Route path={`${props.match.path}/:collectionId`} component={CollectionContainer} />
       </div>
    )   
}
export default Shoppage;