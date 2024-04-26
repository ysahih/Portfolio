import Image from "next/image";

import { LiaPhoneAltSolid } from "react-icons/lia";


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
import { useContext, useState } from "react";
import Parap from "./Parag";
import Link from "next/link";
import RenderContext from "../Contexts/rendre";


const Header = ()=>{
    const render = useContext(RenderContext);

    return (
        <>
        <div className="header">
            <div className="logo">
                <Image
                    className="logoIcon"
                    src="/asahih.png"
                    width={35}
                    height={35}
                    alt="ucef"
                />
            </div>
            <div className={`options ${render?.render === 'connect' ? 'clicked' : ''}`} onClick={()=>{ render?.render === 'connect' ? render?.setRender('home') : render?.setRender('connect')}}>
                <LiaPhoneAltSolid className="Oicon"/>
            </div>
        </div>
        {/*  */}
        </>
    );
}

export default Header;