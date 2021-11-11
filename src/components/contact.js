// Import React //
import React, { useState } from 'react';
// Import EmailJS npm //
import emailjs from "emailjs-com";
// Import React Hook Form npm //
import {useForm} from "react-hook-form";

const Contact = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, error } = useForm();

    const serviceID = "service_wsmwm9a";
    const templateID = "template_ID";
    const userID = "user_qMnjKVkykEbwbYN5lizxs";

    const onSubmit = (data, r) => {
        
        sendEmail(
            serviceID, 
            templateID,
            {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            },
            userID
            )
            // Reset Form
            r.target.reset();
    }


    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you soon!");
          }).catch(err => console.error(`Something went wrong ${err}`));
      };

    return (
        <div className= "contact">
            <div className="text-center">
                <h1> Contact </h1>
                <span className="success-message"> { successMessage } </span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row"> 
                        <div className="col-md-6 col-xs-12">
                            {/* Name Input */}
                            <input 
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="name"
                            name="name"
                            ref= {
                                register("name",
                                {
                                    required: "Please enter your name"
                                })
                            }
                            />
                            {/* <span className="error-message">
                                {error.name && error.name.message}
                            </span> */}
                            {/* Email */}
                            <input 
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="email"
                            name="email"
                            ref= {
                                register("email",
                                {
                                    required: "Please enter your email",
                                    pattern: {
                                        // Email Regex //
                                        value: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
                                        message: "Invalid Email"
                                    }
                                })
                            }
                            />
                            {/* <span className="error-message">
                                {errors.email && errors.email.message}
                            </span> */}
                            {/* Subject */}
                            <input 
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="subject"
                            name="subject"
                            ref= {
                                register("subject",
                                {
                                    required: "Please enter the subject",
                                })
                            }
                            />
                            {/* <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span> */}
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* Message */}
                            <textarea
                            id="message"
                            className="form-control"
                            placeholder="message"
                            name="message"
                            ref= {
                                register("message",
                                {
                                    required: "Please enter your message",
                                })
                            }
                            ></textarea>
                            {/* <span className="error-message">
                                {errors.message && errors.message.message}
                            </span> */}
                        </div>
                    </div>
                    <button className="btn contact-btn" type="submit">
                        Submit
                    </button>
                    {/* {error && (
                    <div>
                        <p className="error-text">{error}</p>
                    </div>
                )} */}
                </form>
            </div>
        </div>
    )
}

export default Contact