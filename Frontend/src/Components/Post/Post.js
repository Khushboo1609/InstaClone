import React, {Component} from 'react'
import "./Post.css";
import {Avatar} from '@material-ui/core';

import love  from "../../images/images/love.svg";
import comment  from "../../images/images/comment.svg";
import share  from "../../images/images/share.svg";


class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            commentList:[]
        }
    }

    componentDidMount(){
        this.getComments();
    }
    getComments=()=>{//calling the backend api
        // let data=[
        //     {
        //         "username":"ASD",
        //         "commentId":"1234",
        //         "timeStamp":"123456",
        //         "description":"comment 1"

        //     },
        //     {
        //         "username":"ASD",
        //         "commentId":"1234",
        //         "timeStamp":"123456",
        //         "description":"comment 1"

        //     },
        //     {
        //         "username":"ASD",
        //         "commentId":"1234",
        //         "timeStamp":"123456",
        //         "description":"comment 1"

        //     },{
        //         "username":"ASD",
        //         "commentId":"1234",
        //         "timeStamp":"123456",
        //         "description":"comment 1"

        //     }
        // ];
        
        fetch("http://localhost:8080/comments/"+ this.props.id)
        .then(response => response.json())
        .then(data =>{
            this.setState({commentList: data})
        });
       
    }

    submitComments = (event) =>{
        if(event.key == "Enter"){
            let comment = event.currentTarget.value;
            if(comment!=null || comment!=undefined){
                

                let payload={
                    "commentId": Math.floor(Math.random() * 100000).toString(),
                    "userId": JSON.parse( localStorage.getItem("users")).uid,
                    "postId": this.props.id,
                    "timeStamp": new Date().getTime(),
                    "comment": comment
                }
    
                const requestOptions={
                    method: "POST",
                    headers : {'Content-Type':'application/json'},
                    body : JSON.stringify(payload)
                }
    
                fetch("http://localhost:8080/comments",requestOptions)
                .then(response => response.json())
                .then(data =>{
                    this.getComments();
                })
                .catch(error =>{
                    
                })
            // ...
            }
        }
    }

    render(){
        return(
            <div className="post_container">
                {/* Header */}
            <div className="post_header">
                <Avatar className="post_image" src={this.props.profileImage}/>
                <div className="post_Username">{this.props.userName}</div>
            </div>
                 {/* Image */}
            <div>
                <img src ={this.props.postImage} width="615px" />
            </div>
                  {/* Analytics */}
            <div>
                <div style={{marginLeft:"10px"}}>
                    <img src={love} className="post_reactimage"/>
                    <img src={comment} className="post_reactimage"/>
                    <img src={share} className="post_reactimage"/>
                </div>
                <div style={{"fontWeight":"bold","marginLeft":"20px"}}>
                    {this.props.likes} likes
                </div>
            </div>
                   {/* Comment seection */}
            <div>
                {
                    this.state.commentList.map((item,index)=>(
                        index < 4 ?
                        <div className="post_comment">{item.username}:{item.comment}</div> :<span></span>
                    ))
                }
                
                <input text= "text" onKeyPress = {this.submitComments} className="post__commentbox" placeholder='add a comment...'/>
            </div>
            </div>
        );
        
    } 
}
export default Post;