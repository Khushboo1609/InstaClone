import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./InfoSection.css"
import imgSrc from "../../images/images/pp1.png"


class InfoSection extends Component{
    constructor(props){
        super(props);
        this.state = { }
    }
    render(){
        return (
            <div>
                <div className="info_container">
                    <Avatar src={"https://camo.githubusercontent.com/8cd191ddea6f87a7114ee56645926beb4be75ec0/68747470733a2f2f62696768656164732e696f2f7376673f74776f?ref=morioh.com&utm_source=morioh.com"} className="info_image"/>
                    <div className="info_content">
                        <div className="info_username">Ishani</div>
                        <div className="info_description">Description</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoSection ;