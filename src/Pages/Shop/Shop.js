import React from 'react';
import {Route} from 'react-router-dom';
import Collection from '../Collection/Collection';
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import './Shop.css';
const Shoppage = ({match}) =>{
    return(
       <div className='shop-page'>
           <Route exact path={`${match.path}`} component={CollectionsOverview}/>
           <Route path={`${match.path}/:collectionId`} component={Collection} />
       </div>
    )   
}
export default Shoppage;