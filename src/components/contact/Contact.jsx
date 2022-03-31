import React, { useRef , useState , useContext} from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from "emailjs-com"
import {ThemeContext} from '../../context';

const Contact = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e)  => {
        e.preventDefault();
        emailjs.sendForm(
            'service_a0h1h3x', 
            'template_ktlih4a', 
            formRef.current, 
            'rS3jy6FObBRG_olCZ'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project.</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon"/>
                        +1 1234 556 75                           
                    </div>
                    <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon"/>
                    aroobasiddiqi01@gmail.com
                    </div>
                    <div className="c-info-item">
                    <img src={Address} alt="" className="c-icon"/>
                    475 Ruffin Ln Saint Stephens Church, Virginia(VA), 23148
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story? </b>Get in touch.<br/>Always available for freelancing if the right project comes along.
                </p>
                <form action="" ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                    <textarea style={{backgroundColor: darkMode && "#333"}} name="Message" cols="30" rows="5" placeholder="Message"></textarea>
                    <button>Submit</button>
                    {done && " Thank You."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact