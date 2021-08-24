import React,{useContext} from 'react';
import {Context as ShopContext} from '../../Context/Shop/ShopContext'
import {selectCollectionsForPreview} from '../../Context/Shop/ShopSelector';
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import "./CollectionsOverview.css";

const CollectionsOverview = () => {
    const {state} = useContext(ShopContext);
    const collections=selectCollectionsForPreview(state);
    return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
export default CollectionsOverview;