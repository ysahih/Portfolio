
import Form from "./Form";
import Parap from "./Parag";
import Socials from "./Socials";



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
                    <Socials/>
                </div>

            </div>
          
            {/* <div className="footer">
                    <div className="line"></div>
                    <p>uc3f  -  2024</p>
            </div> */}
             </div>
    );
}

export default Contact;