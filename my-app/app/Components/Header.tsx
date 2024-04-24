import Image from "next/image";
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Button } from "@mui/material";


import Form from "./Form";



interface Donloadprops {
  fileUrl: string;
  fileName: string;
}

const DownladCV: React.FC<Donloadprops> = ({ fileUrl, fileName }) => {
  return (
    <a href={fileUrl} download={fileName}>
      Download
    </a>
  );
};

// export default DownloadButton;


import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { useState } from "react";
import Parap from "./Parag";


const Header = ()=>{
    const [contact, setContact] = useState(false);
    return (
        <>
        <div className="header">
            <div className="logo">
                <Image
                    className="logoIcon"
                    src="/ucefLogo.svg"
                    width={35}
                    height={35}
                    alt="ucef"
                />
            </div>
            <div className="options" onClick={()=>{setContact(!contact)}}>
                <LiaPhoneAltSolid className="Oicon"/>
            </div>
        </div>
        {contact && <div className="Connect">
            <div className="connecHead">
                <hr className="line"/>
                <h2>Connect with </h2>
            </div>
            <div className="intro">
                    <Parap className={"paragraph"}/>
            </div>
            {/* <hr></hr> */}
            <div className="infos">
                <div className="sideIcons">

                    <div className="socials">
                        <div className="smContainer">
                            <ImGithub    className="socialIcon"/>
                        </div>
                        <div className="smContainer">
                            <ImLinkedin  className="socialIcon squared"/>
                        </div>
                        <div className="smContainer">
                            <ImFacebook2 className="socialIcon squared" />
                        </div>
                        <div className="smContainer">
                            <ImInstagram className="socialIcon squared" />
                        </div>
                        <div className="smContainer">
                            <ImTwitter   className="socialIcon"/>
                        </div>
                    </div>

                    <div className="resume">
                    <Button
                          variant="contained"
                          tabIndex={-1}
                          startIcon={< IoCloudDownloadOutline style={{width:'15px'}}/>}
                          style={{ backgroundColor: '#008080', width: '90px', fontSize: '10px'}}
                        >
                          resume
                        </Button>
                        
                    </div>
                </div>
                
                <div className="">
                    <div className="myPhoto">
                        {/* <Image 
                            className="ucef"
                            src='/image.jpeg'
                            width={80}
                            height={40}
                            alt="uc3f"
                        /> */}
                    <div className="form">
                        <Form />
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="footer">
                    <div className="line"></div>
                    <p>uc3f  -  2024</p>
            </div>
             </div>}
        </>
    );
}

export default Header;