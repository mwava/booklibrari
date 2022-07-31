import React from "react";


const CatatanArchive=({id,onArchive})=>{
    return <button className='cbtn_archive' onClick={()=>{onArchive(id)}}>Xanjay</button>
}


export default CatatanArchive