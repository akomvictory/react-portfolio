import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {useContext, useRef, useState} from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_0f95h83', 'template_wnfb6ni', formRef.current, 'user_lz6HxNs2qEOpcNzCTWpa6')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project </h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} alt="" className="c-icon" />
                                +234 816 154 4559
                            </div>
                            <div className="c-info-item">
                                <img src={Email} alt="" className="c-icon" />
                                akom.victory@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img src={Address} alt="" className="c-icon" />
                                FCT Abuja, Nigeria
                            </div>
                        </div>
                   
                </div>
                <div className="c-right">
                    <p className="c-desc">
                      <b>What's your story</b> Get in touch. Always 
                      freelancing if the right project comes along.  
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea name="message" placeholder="Message" id="" cols="30" rows="5"></textarea>
                        <button>Submit</button>
                        {done && "Thank you"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
