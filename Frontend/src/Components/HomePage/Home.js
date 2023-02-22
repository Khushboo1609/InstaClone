import React,{Component} from 'react';
import '../HomePage/Home.css';
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return( 
    <div>
        <NavBar/>
        <MainContent/>
    </div>
        );
    }
}

export default HomePage;