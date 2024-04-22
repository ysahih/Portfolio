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
        <div className="infos">
            <ImGithub    className="socials"/>
            <ImLinkedin  className="socials"/>
            <ImFacebook2 className="socials" />
            <ImInstagram className="socials" />
            <ImTwitter   className="socials"/>
        </div>
        </>
    );
}

export default Header;