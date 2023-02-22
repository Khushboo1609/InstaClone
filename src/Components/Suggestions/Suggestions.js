import React, { Component } from "react";
import "./Suggestions.css"
import imgSrc from "../../images/images/pp1.png"
import { Avatar } from "@material-ui/core";


class Suggestions extends Component{
    constructor(props){
        super(props);
        this.state = { }
    }
    render(){
        return (
            <div>
                <div className="suggestions_container">
                    <div className="suggestions_header">
                            <div>Suggestions For You</div>
                    </div>
                    <div className="suggestions_body">
                        <div className="suggestions_friends">
                            <Avatar src={"https://media.istockphoto.com/id/954892442/vector/portrait-of-young-beautiful-woman.jpg?s=1024x1024&w=is&k=20&c=zLrRfVDbTH8flXoQ5CO1uOOCkCmGzgLDNlSdfuOIkfA="} className="suggestions_image"/>
                            <div className="suggestions_username">Ipshita</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={"https://media.istockphoto.com/id/971177024/vector/diver-child.jpg?s=1024x1024&w=is&k=20&c=1JdT6-rGY4YTtyEzG9Q1KzqPPPIbdJP9lT__WkLZ2RY="} className="suggestions_image"/>
                            <div className="suggestions_username">Aanaya</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={"https://media.istockphoto.com/id/875332720/vector/avatar-cartoon-with-santa-costume.jpg?s=1024x1024&w=is&k=20&c=4X9qfH9BliOKskBOstuT0Ur9yIHszvXjSUpKmEG8ZIc="} className="suggestions_image"/>
                            <div className="suggestions_username">Rohini</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={"https://media.istockphoto.com/id/816765692/vector/sweet-girl-points-to-something-a-new-cool-idea-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=Gj5WmjiFrp1t5JUTNxWvoEzcCAeIAZXgZl5-xYAVBXw="} className="suggestions_image"/>
                            <div className="suggestions_username">kanika</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={"https://thumbs.dreamstime.com/b/female-user-avatar-profile-picture-icon-isolated-vector-illustration-flat-design-people-character-white-background-woman-146472409.jpg"} className="suggestions_image"/>
                            <div className="suggestions_username"> praneeti</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={"https://binkleysrestaurant.com/libs/ace/assets/avatars/profile-pic.jpg"} className="suggestions_image"/>
                            <div className="suggestions_username">pulkit</div>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default Suggestions ;