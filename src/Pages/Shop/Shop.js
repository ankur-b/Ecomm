import React,{useContext,useEffect} from 'react';
import {Route} from 'react-router-dom';
import {Context as ShopContext} from '../../Context/Shop/ShopContext';
import CollectionsOverviewContainer from '../../Components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionContainer from '../Collection/CollectionContainer';
import './Shop.css';
const Shoppage = (props) =>{
    const {fetchCollectionsStartAsync} = useContext(ShopContext);
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