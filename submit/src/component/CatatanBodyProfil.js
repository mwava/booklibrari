import React from "react";
import CatatanProfil from "./CatatanProfil";
import CatatanHapus from "./CatatanHapus";
import CatatanArchive from "./CatatanArchive";



const CatatanBodyProfil =({id,title,createdAt,body,archived,onDelete,onArchive})=>{
    return(
        <div className="catatan-body_profil">
            <CatatanProfil title={title} createdAt={createdAt} body={body} archived={archived} />
            <CatatanHapus id={id} onDelete={onDelete}/>
            <CatatanArchive id={id} onArchive={onArchive}/>

        </div>
    )
}


export default CatatanBodyProfil