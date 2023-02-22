import React, {Component} from 'react'
import "./StatusBar.css";
import statusimg from "../../images/images/pp1.png";
import {Avatar} from '@material-ui/core';
import uploadImg from "../../images/images/statusadd.png"


class StatusBar extends Component{
    constructor(props){
        super(props);
        this.state={
            statusList: []
            
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData=()=>{
        let data=[
            {
                "username":"khush",
                "imageURL" :"https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Hipster_Man-512.png"
            },
            {
                "username":"Muskan",
                "imageURL" :"https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Sunglasses_Woman-512.png"
            },
             {
                "username":"Harish",
                "imageURL" : "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Grinning_Man-512.png"
            },
            {
                "username":"khushi",
                "imageURL" :"https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Asian_Woman-512.png"
            },
            {
                "username":"Rohit",
                "imageURL" :"https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
            },
            {
                "username":"Nawab",
                "imageURL":"https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Arabian_Man-512.png"
            },
            {
                "username":"Mona",
                "imageURL":"https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Nerd_Woman-2-512.png"
            }

        ]
        this.setState({statusList: data});

    }

    render(){
        return(
            <div >
                <div className="statusbar_container">
                    <img src={uploadImg} className="statusbar_upload" width="55px" height="55px"/>
                    {
                        this.state.statusList.map((items,index)=>(
                        <div className="status">
                            <Avatar className="statusbar_status" src={items.imageURL}/>
                            <div className="statusbar_text">
                                 {items.username}
                            </div>
                        </div>

                        ))
                    }
                    
                    
                    
                    
                </div>
              
            </div>
        );
        
    } 
}
export default StatusBar;