import React  from "react";

const PencarianCatatan=()=>{
    return(
        <div>
            <h2>Cari Buku (Opsional)</h2>
    <form id="searchBook">
      <label for="searchBookTitle">Judul</label>
      <input id="searchBookTitle" type="text"></input>
      <button id="searchSubmit" type="submit">Cari</button>
    </form>
        </div>
    )
}
export default PencarianCatatan