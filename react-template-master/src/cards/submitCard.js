import React ,{Component}from 'react'
import {itemPost, createComment } from '../auth/api'
import 'bootstrap/dist/css/bootstrap.css';


class SubmitCard extends Component{
    constructor(props) {
    
        super(props);
    
        this.state = {
         title:'',
         text:'',
         comment: '',
         id : ''
        }
       
        
      }
     
      changeHandler=(e)=>{
          this.setState({[e.target.name]:e.target.value})
           

      }
      changeHandlerComment = (e)=>{
        this.setState({[e.target.name]:e.target.value})
      }

      sendComment = e=>{
        e.preventDefault()
        //console.log(this.state)
        let comment = this.state.comment

        createComment(comment, this.state.id )
        .then(response=>{
         //   console.log(response)
         this.props.handleNewSubmit(response.data.item);
        
        })
        .catch(error =>{
            console.log(error)
        })
      }

      submitHandler=e=>{
    //    const token =localStorage.getItem("userToken")

          e.preventDefault()
          //console.log(this.state)
          itemPost(this.state,this.props.user.token)
          .then(response=>{
             console.log(response)
             this.setState({id: response.data.item._id})
           this.props.handleNewSubmit(response.data.item);
          
          })
          .catch(error =>{
              console.log(error)
          })
        

      }
      


    render(){
       
      
        return (
            <div>
         
<form onSubmit={this.submitHandler} >
  <div >
  
    <input type="text" value={this.state.title}  name="title"   onChange={this.changeHandler} />
  </div>
  <div >
    <input type="text"  value={this.state.text} name="text" onChange={this.changeHandler}
    />
  </div>

  <button type="submit"  className="btn btn-warning">Submit</button>
</form>
{/* <form onSubmit={this.sendComment} >
  <div >
  
    <input type="text" value={this.state.comment}  name="comment"   onChange={this.changeHandlerComment} />
  </div>
  

  <button type="submit"  className="btn btn-warning">commint</button>
</form> */}

        </div>
        
          
        );
   
   
      }




}




export default SubmitCard;


