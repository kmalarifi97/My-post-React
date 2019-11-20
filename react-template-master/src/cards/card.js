import React ,{Component}from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {getItems} from '../auth/api'
import { deleteItem, editItem } from '../auth/api'
import CardInformation from './cardInformation'





class Card extends Component{
  
  constructor(props) {
    
    super(props);

    this.state = {
     cards:[],
      token: "",
     
    
    };
    
   
    
  }


  componentDidMount() {
    const token = localStorage.getItem('userToken')
    console.log(token)
    this.setState({token})
    getItems()
    .then(response => {

      this.props.updateItems(response.data.items)
    

    })
  
    .catch(err => {
      console.log(err);
    })  
  }
  
  editItem=(id, data)=>{
    const token = localStorage.getItem('userToken')
    editItem(id, token, data)
    .then(res=>{
      
     console.log(res)
        
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
  }
  deleteItem=(id)=>{
    console.log('token', this.state.token)
    
    deleteItem(id, this.props.user.token)
    .then(res=>{
      
     console.log(res)
     
    }).catch(err => {
        console.log(err)
    })
  }
  
  
    render(){
      console.log('items',this.props.items)
      const cardsMap= this.props.items.map((card,i)=>{
       
        return(
          
          <CardInformation
          owner={card.owner}
          user={this.props.user}
          title={card.title}
          text={card.text}
          commentq={card.comments.map((comment,i)=>(comment.comment))}
          deleteItem={this.deleteItem}
          itemId={card._id}
          editItem={this.editItem}


          key={i}

       /> )
       
      }
     )
     
     
         return(
cardsMap)
       
    }
    




}

export default Card;

































// router.delete('/api/articles/:id', function(req, res) {
//   Article.findById(req.params.id)
//     .then(function(article) {
//       if(article) {
//         // Pass the result of Mongoose's `.update` method to the next `.then`
//         return article.remove();
//       } else {
//         // If we couldn't find a document with the matching ID
//         res.status(404).json({
//           error: {
//             name: 'DocumentNotFoundError',
//             message: 'The provided ID doesn\'t match any documents'
//           }
//         });
//       }
//     })
//     .then(function() {
//       // If the deletion succeeded, return 204 and no JSON
//       res.status(204).end();
//     })
//     // Catch any errors that might occur
//     .catch(function(error) {
//       res.status(500).json({ error: error });
//      });
// });