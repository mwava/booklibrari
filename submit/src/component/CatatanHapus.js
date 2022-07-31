import React from "react";


const CatatanHapus=({id,onDelete})=>{
    return <button className='cbtn_hapus' onClick={()=>{onDelete(id)}}>Xanjay</button>
}


export default CatatanHapus