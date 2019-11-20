import React ,{Component}from 'react'
import 'bootstrap/dist/css/bootstrap.css';


class CardInformation extends Component{

  state = {
    title:'',
    text:'',
    token: '',
    items: []
   
   }

   changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
     

}

  
  deleteItem = (e)=>{
    e.preventDefault();
this.props.deleteItem(this.props.itemId);
}


editItem = (e)=>{
  e.preventDefault();
 const data = { 
  item: {
    title: this.state.title,
    text: this.state.text,
  }
 }
   this.props.editItem(this.props.itemId, data);
}
    render(){
let button = ''
      if (this.props.user && this.props.owner == this.props.user._id){
     button =  <div>
       
       <div>
         
         <form onSubmit={this.submitHandler} >
           <div >
           
             <input type="text" value={this.state.title}  name="title"   onChange={this.changeHandler} />
           </div>
           <div >
             <input type="text"  value={this.state.text} name="text" onChange={this.changeHandler}
             />
           </div>
         
           <button type="submit" className="btn btn-warning" onClick={this.editItem} >Edit Item</button>
       <button type="button" className="btn btn-danger" onClick={this.deleteItem} >Delete Item</button>
         </form>
         
                 </div>
     </div> 

      }
      //  {console.log(this.props.commentq,"this is commentq")}
      
        return (
            <div>
            <div class="card" styles="width: 18rem;">
          <div class="card-body">
    <h5 class="card-title">{this.props.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{this.props.text}</h6>
    <p class="card-text">{this.props.commentq.map(comment=> <p className="card-text">{comment}</p>)}
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </p>
  {button}
  </div>
</div>
           
        </div>
        
          
        );
   
   
      }




}

export default CardInformation;
