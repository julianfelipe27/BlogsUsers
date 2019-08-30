import React, { Component } from 'react';



class PostItem extends Component {

    handleEdit(){
      //console.log(this.props.user)
      this.props.onEdit(this.props.post)
    }
    handleDel(){
      //console.log(this.props.user)
      this.props.onDelete(this.props.post)
    }

    render() {
        let post = this.props.post
        return (
          <tr>
            <td>{post.userid}</td>
            <td>{post.titulo}</td>
            <td>{post.texto}</td>
            <td>{post.votos}</td>
            <td>
            <button className="btn btn-primary mx-3" onClick={this.handleEdit.bind(this)} >Editar</button>
            <button className="btn btn-danger" onClick={this.handleDel.bind(this)} >Eliminar </button>
            </td>
          </tr>            
        );
      }
    }
    
export default PostItem;    