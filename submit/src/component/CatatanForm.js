import React,{Component} from "react";
import {showFormattedDate} from "./init/data"


class CatatanForm extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:'',
            createdAt: showFormattedDate()
            
        }
        this.onTitleCatatan=this.onTitleCatatan.bind(this)
        this.onBodyCatatan=this.onBodyCatatan.bind(this)
        this.onSubmitHandler=this.onSubmitHandler.bind(this)
    

    }
    onTitleCatatan(e){
        this.setState(()=>{
            return{
                title: e.target.value
            }
        })
    }
    onBodyCatatan(e){
        this.setState(()=>{
            return{
                body: e.target.value
            }
        })
    }
  
    onSubmitHandler(event){
        event.preventDefault()
        this.props.addCatatan(this.state);
    }
    render(){
        return(
            <div className="catatan-form">
                <form className="catatan-inputer" onSubmit={this.onSubmitHandler}>
                    <input type='text' placeholder="TITLE" value={this.state.title} onChange={this.onTitleCatatan}/>                  
                    <textarea placeholder="Deskripsikan Catatanmu" value={this.state.body} onChange={this.onBodyCatatan}></textarea>
                            <button type="submit">TAMBAHKAN</button>
                 
                    
                </form>
                
            </div>
        )
    }
}


export default CatatanForm