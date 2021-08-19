import React from 'react';
import ShopData from './Shopdata'
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';
import './Shop.css';
const Shoppage = () =>{
    const collections=ShopData;
    return(
       <div className='shop-page'>
           {
               collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
               ))
           }
       </div>
    )   
}
export default Shoppage;