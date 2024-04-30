import Form from "./Form";
import Parap from "./Parag";


const Footer = ()=>{
    return (
        <div className="footerHolder">

            <div className="footer">
                <div className="sectionHeader">
                    <h1>GET IN TOUCH</h1>
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