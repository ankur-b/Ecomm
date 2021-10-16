import React,{useContext} from 'react';
import CollectionItem from '../../Components/CollectionItem/CollectionItem';
import { useParams } from 'react-router-dom';
import {Context as ShopContext} from '../../Context/Shop/ShopContext';
import {selectCollection} from '../../Context/Shop/ShopSelector';
import WithSpinner from '../../Components/WithSpinner/WithSpinner';
import './Collection.css';

const Collection = ({match})=>{
    const {collectionId} = useParams()
    const {state} = useContext(ShopContext);
    const collection = selectCollection(collectionId)(state); 
    const {title,items} = collection;
    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item=><CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}
export default WithSpinner(Collection);