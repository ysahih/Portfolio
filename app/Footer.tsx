import Form from "./Components/Form";
import Parap from "./Components/Parag";


const Footer = ()=>{
    return (
        <div className="footerHolder">

            <div className="footer">
                <div className="sectionHeader">
                    <h1>Get in Touch</h1>
                    <hr />
                </div>
                <div className="intro">
                    <Parap className={"paragraph"}/>
                </div>
                <div className="footerContainer">
                    <Form />
                </div>
                < div className="foot">
                    <p>Designed & Built by Youssef SAHIH</p>
                </div >
            </div>
        </div>
    );
}

export default Footer;