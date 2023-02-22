import React,{Component} from 'react';
import '../NavBar/NavBar.css';
import { Grid } from '@material-ui/core';
import insta_log from '../../images/images/logoinsta.png';
import home from '../../images/images/home.svg';
import message from '../../images/images/message.svg';
import find from '../../images/images/find.svg';
import react from '../../images/images/love.svg';
import Avatar from '@material-ui/core/Avatar';
import pp from '../../images/images/pp1.png';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return( 
        <div>
            <div className='navbar_barContent'>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                        <img className="navbar_logo" src={insta_log} width="105px"/>
                    </Grid>
                    <Grid item xs={3}>
                        <input text="text" className="navbar_searchBar" placeholder="search"/>
                    </Grid>
                    <Grid item xs={3} style={{"display":"flex"}}>
                    <img className="navbar_img" src={home} width="25 px"/>
                    <img className="navbar_img"  src={message} width="25 px"/>
                    <img className="navbar_img" src={find} width="25 px" />
                    <img className="navbar_img" src={react} width="25 px"/>
                    <Avatar src={"https://thumbs.dreamstime.com/b/female-user-avatar-profile-picture-icon-isolated-vector-illustration-flat-design-people-character-white-background-146446507.jpg"} className="navbar_img" style={{"maxWidth":"25px","maxHeight":"25px"}}/>
                    </Grid>
                    <Grid item xs={1}></Grid>   
                </Grid>
            </div>
            
        </div>
        );
    }
}

export default NavBar;