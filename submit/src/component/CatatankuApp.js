
import React ,{Component} from 'react'
import {getInitialData} from './init/data'
import CatatanDaftarlis from './CatatanDaftarlis';
import CatatanForm from './CatatanForm';
import PencarianCatatan from './PencarianCatatan';

class CatatankuApp extends Component{
    constructor(props){
        super(props);
        this.state={
            catatans: getInitialData(),
            cariCatatanku:''
        }
        this.onDeleteHandler=this.onDeleteHandler.bind(this);
        this.onAddCatatanHandler=this.onAddCatatanHandler.bind(this);
        this.onCatatanTerbacaHandler = this.onCatatanTerbacaHandler.bind(this)
    }

   
    onAddCatatanHandler({title,body}){
        let data= new Date();
        this.setState((prevState)=>{
            return{
                catatans:[
                ...prevState.catatans,
                {
                    id: +new Date(),
                    title,
                    body,
                    createdAt: data.toLocaleDateString(),
                    archived: false
                    

                }
              ]
            }
        })
    }
    onDeleteHandler(id){
        const catatans = this.state.catatans.filter(catatan=>catatan.id !==id)
        this.setState ({catatans})
    }
    onCatatanTerbacaHandler(id){
        const catatans =this.state.catatans.map((catatan)=> catatan.id === id? {...catatan, archived: true} : catatan)
    
        this.setState({catatans})
    }
    render(){
        const activeCatatans = this.state.catatans.filter((catatan) => {
            return catatan.archived === false;
          });
          const archiveCatatans = this.state.catatans.filter((catatan) => {
            return catatan.archived === true;
          });
          const cariCatatan = this.state.catatans.filter((catatan)=>catatan.title.toLowerCase().includes(this.state.cariCatatanku.toLocaleLowerCase()))
         
        return(
            <div className='catatan-app'>
                <header>CATATANKU</header>
                <PencarianCatatan catatans={cariCatatan}/>
                <h1>TAMBAHKAN CATATANMU</h1> 
                
                <CatatanForm addCatatan={this.onAddCatatanHandler}/>
                <h1>Catatan yang belum dibaca</h1>
                {activeCatatans.length !==0 && activeCatatans ? (
                     <CatatanDaftarlis catatan={activeCatatans} catatans={this.state.catatans} onDelete={this.onDeleteHandler} onArchive={this.onCatatanTerbacaHandler}/>
                     )

                     :(<h2>Catatanmu Kosong</h2>)
                    }   
               
                <h1 className='cttn-done_baca'>Catatan Telah dibaca</h1>
                {archiveCatatans.length !==0 && archiveCatatans ? (
                     <CatatanDaftarlis catatan={archiveCatatans} catatans={this.state.catatans} onDelete={this.onDeleteHandler} onArchive={this.onCatatanTerbacaHandler}/>
                     )

                     :(<h2>Catatanmu Kosong</h2>)
                    }   
              

            </div>
        )
    }
}


export default CatatankuApp;