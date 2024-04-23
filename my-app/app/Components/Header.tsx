import Image from "next/image";
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";





import { PiDotsThreeOutlineLight } from "react-icons/pi";


const Header = ()=>{
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
            <div className="options">
                <PiDotsThreeOutlineLight className="Oicon"/>
            </div>
        </div>
        <div className="Connect">
            <div className="connecHead">
                <h2>Connect with me!</h2>
            </div>
            <hr></hr>
            <div className="infos">
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
                <div className="myPhoto">
                    <Image 
                        className="ucef"
                        src='/image.jpeg'
                        width={80}
                        height={40}
                        alt="uc3f"
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;