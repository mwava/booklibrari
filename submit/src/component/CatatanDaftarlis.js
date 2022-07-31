import React from "react";
import CatatanBodyProfil from "./CatatanBodyProfil";

const CatatanDaftarlis=({catatans,onDelete,onArchive})=>{
    return(
        <div className="catatan-list">
          
     {
       catatans.map((catatan) => (
         <CatatanBodyProfil 
         key={catatan.id} 
         id={catatan.id} 
          onDelete={onDelete}
          onArchive={onArchive}
          
         {...catatan} />
       ))
     }
   
        </div>
    )
}

export default CatatanDaftarlis