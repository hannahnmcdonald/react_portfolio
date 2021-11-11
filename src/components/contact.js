// Import React //
import React, { useState } from 'react';
// Import EmailJS npm //
import emailjs from "emailjs-com";

const contact = () => {

    const serviceID = "service_wsmwm9a";
    const templateID = "template_ID";
    const userID= "user_qMnjKVkykEbwbYN5lizxs";


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className= "contact">
            <div className="text-center">
                <h1> Contact </h1>
            </div>
            <div className="container">
                <form onSubmit={ sendEmail }>
                    <div className="row"> 
                        <div className="col-md-6 col-xs-12">
                            {/* Name Input */}
                            <input 
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="name"
                            name="name"
                            />
                            {/* Email */}
                            <input 
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="email"
                            name="email"
                            />
                            {/* Subject */}
                            <input 
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="subject"
                            name="subject"
                            />
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* Message */}
                            <textarea
                            id="message"
                            className="form-control"
                            placeholder="message"
                            name="message"
                            ></textarea>
                        </div>
                    </div>
                    <button className="btn contact-btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default contact