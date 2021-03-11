import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <>
        <section className="contactWrapper" id="contact">
           <h1>Get In Touch</h1> 
          <form className="contactContainer">      
          <input className="inputContact" type="text" 
               name="username"
               placeholder="Name"
                ></input>  
          
          <input className="inputContact" type="email" 
               name="email"
               placeholder="Email"
                ></input>
          <textarea className ="textareaContact" type="text" 
              name="message"
              placeholder="Your Message"
              ></textarea>
            <button className="contactButton">Send</button>
          </form>  
        </section>
            
        </>
    )
}

export default Contact
