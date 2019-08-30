import React, { Component } from 'react';
import UserItem from "./UserItem";

class PostList extends Component {


    onEditHandle(post){
        //console.log(user)
        this.props.onEdit(post)
    }

    onDeleteHandle(post){
        //console.log(user)
        this.props.onDelete(post)
    }

    render() {
        let listaUsuarios= this.props.users.map( post =>
            <UserItem key={post.id} post={post}  onEdit={this.onEditHandle.bind(this)}  onDelete={this.onDeleteHandle.bind(this)} /> )

        return (
            <table className="table container">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">email</th>
                    <th scope="col">Area</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {listaUsuarios}
            </tbody>
            </table>  
        );
      }
    }
    
export default PostList;    