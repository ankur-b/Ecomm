import React,{useState,useEffect,useContext} from 'react';
import {Route} from 'react-router-dom';
import Collection from '../Collection/Collection';
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview';
import {Context as ShopContext} from '../../Context/Shop/ShopContext';
import { firestore,convertCollectionsSnapshotToMap } from '../../Firebase/Firebase';
import WithSpinner from '../../Components/WithSpinner/WithSpinner';
import './Shop.css';
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(Collection) 
const Shoppage = (props) =>{
    let unsubscribeFromSnapshot = null;
    const [isLoading,setIsLoading] = useState(true);
    const {updateCollections} = useContext(ShopContext)
    useEffect(()=>{
        const collentionRef = firestore.collection('collections');
        collentionRef.get().then(snapshot=>{
            const collectionMap =  convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionMap);
            setIsLoading(false);
        })
    },[])
    return(
       <div className='shop-page'>
           <Route exact path={`${props.match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>}/> 
           <Route path={`${props.match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={isLoading} {...props}/>} />)
       </div>
    )   
}
export default Shoppage;