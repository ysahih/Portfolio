import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import Form from "./Form";
import Parap from "./Parag";



const Contact = ()=>{
    return (
        <div className="Connect">
            <div className="connecHead">
                <hr className="line"/>
                <h2>Get in Touch.</h2>
            </div>

            <div className="intro">
                    <Parap className={"paragraph"}/>
            </div>
            {/* <hr></hr> */}
            <div className="infos">
                    <div className="myPhoto">
                        <div className="form">
                            <Form />
                        </div>
                    </div>

                <div className="sideIcons">
                    <div className="socials">
                        
                        <div className="smContainer">
                          <a href="https://github.com/ysahih" target="_blank">
                            <ImGithub className="socialIcon" />
                          </a>
                        </div>
                        
                        <div className="smContainer">
                            <a href="https://www.linkedin.com/in/youssef-sahih/" target="_blank">
                                <ImLinkedin  className="socialIcon squared"/>
                            </a>
                        </div>

                        <div className="smContainer">
                        <a href="https://www.facebook.com/ucef.02/" target="_blank">
                            <ImFacebook2 className="socialIcon squared" />
                            </a>
                        </div>

                        <div className="smContainer">
                        <a href="https://www.instagram.com/uc3f.02/" target="_blank">
                            <ImInstagram className="socialIcon squared" />
                        </a>
                        </div>
                            
                        <div className="smContainer">
                            <a href="https://twitter.com/uc3f02" target="_blank">
                            <ImTwitter   className="socialIcon"/>
                        </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="resume">
                        <Button
                          variant="contained"
                          tabIndex={-1}
                          startIcon={< IoCloudDownloadOutline style={{width:'15px'}}/>}
                          style={{ backgroundColor: '#008080', width: '90px' , height:'30px', fontSize: '10px'}}
                        >
                          resume
                        </Button>
                        
                    </div>
            {/* <div className="footer">
                    <div className="line"></div>
                    <p>uc3f  -  2024</p>
            </div> */}
             </div>
    );
}

export default Contact;