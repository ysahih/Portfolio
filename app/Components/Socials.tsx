import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Button } from "@mui/material";


const Socials = ()=>{
    return (
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
    );
}

export default Socials;