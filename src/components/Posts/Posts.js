import React, {Component} from 'react';

import UserList from './UserList';
import UserForm from './UserForm';
import firebase from '../../config/firebase'; 

class Post extends Component {

    constructor(){
      super();
      this.state = {
        posts: [
        ],
        postedit: {userid: "", titulo: "",  texto:""},
        database: firebase.firestore()
      }
    }
  
    componentDidMount(){
      //const users = firebase.database().ref('users');
      this.refresh()
    }
    
    refresh(){
      let posts = []
      this.state.database.collection("posts").get().then(
        querySnapshot =>{ querySnapshot.forEach( doc => {
          posts.push(doc.data())
        })
        this.setState({posts: posts})
      });    
    }
  
  
    addPost(post){
      // let users = this.state.users;
      // users.push(user);
      // console.log(users);
      // this.setState({
      //   users: users
      // })
      if(post.userid===""){         
        let id= Math.ceil(Math.random()*1000000)
        post.userid = ""+id
      }
      this.state.database.collection("posts").doc(posts.userid).set(post)
  
      this.refresh()
  
    }
  
    onEditHandle(user){
     // console.log(user)
      this.setState({
        useredit: user
      })
    }
  
    onDeleteHandle(user){
      this.state.database.collection("usuarios").doc(user.id).delete()
      this.refresh()
    }
  
    render() {
    
      return (
        <div className="container">
            <UserList users={this.state.users} onEdit={this.onEditHandle.bind(this)}  onDelete={this.onDeleteHandle.bind(this)}/>
            <UserForm onAdd={this.addUser.bind(this)} useredit={this.state.useredit} />
        </div>
      );
    }
  }
  
  export default Post;
  