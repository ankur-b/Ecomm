import React from 'react';
import { useHistory,withRouter } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.css'

const CollectionPreview = ({title,items,match,routeName})=>{
    const history = useHistory()
    return (
        <div className="collection-preview">
            <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</h1>
            <div className="preview">
                {items.filter((item,idx)=>idx<4).map(item=>{
                    return <CollectionItem key={item.id} item={item}/>
                })}
            </div>
        </div>
    )
}
export default withRouter(CollectionPreview)