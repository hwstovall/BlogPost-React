import React, {Component} from 'react';
import '../App.css';
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";

class Home extends Component {

    render() { 
        return ( 
            <div className="container text-center home">
                <div className="">
                    <h1 className="text-center ">Welcome to our Blog Site!!</h1>
                    <a href="mailTo:sinte@gmail.com" style={{textDecoration: "none"}}>GET IN TOUCH!</a>
                </div>    
                <div className="contact">
                    <a href="https://github.com/24sint" target="_blank" rel="noopener noreferrer"><IoLogoGithub size='2rem'/></a>
                    <a href="https://www.linkedin.com/in/sintumekonnen/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size='2rem'/></a>
                    <a href="https://twitter.com/home?lang=en" target="_blank" rel="noopener noreferrer"><IoLogoTwitter size='2rem'/></a>
                </div>
            </div>
         );
    }
}
 
export default Home;