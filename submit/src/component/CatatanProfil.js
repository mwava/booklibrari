import React from "react";
import {showFormattedDate} from "./init/data"



const CatatanProfil= ({title,body,createdAt,})=>{
    return(
        <div className="catatan-profil">
            <h2 className="catatan-profile_title">{title}</h2>
            <p className="catatan-profile_createdAt">{showFormattedDate(createdAt)}</p>
            <h4 className="catatan-profile_body">{body}</h4>
        </div>
    )
}


export default CatatanProfil