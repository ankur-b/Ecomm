import React,{useContext} from "react";
import MenuItem from '../MenuItem/MenuItem'
import {Context as DirectoryContext} from '../../Context/Directory/DirectoryContext'
import {selectDirectorySections} from '../../Context/Directory/DirectorySelector';
import './Directory.css'
const Directory = (props) => {
  const {state} = useContext(DirectoryContext);
  const sections = selectDirectorySections(state)
  return (
    <div className="directory-menu">
        {
            sections.map(({id,...otherSectionProps})=>{
                return <MenuItem key={id} {...otherSectionProps}/>
            })
        }
    </div>
  );
};
export default Directory;
