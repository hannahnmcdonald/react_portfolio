// Import React //
import React, { useState, useRef } from 'react';
// Import EmailJS npm //
import emailjs from "emailjs-com";
// Import React Hook Form npm //
import {useForm} from "react-hook-form";
// Import error message from @ hookform-error/message //
import { ErrorMessage } from '@hookform/error-message';

const Contact = () => {

    const form = useRef();
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: 'all',
    });

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


    const sendEmail = () => {
        emailjs.send(serviceID, templateID, form.current, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you soon!");
          }).catch(err => console.error(`Something went wrong ${err}`));
      };

    return (
        <div className= "contact">
            <div className="text-center">
                <h1> Contact </h1>
                    <h6> Submit your message or email me at hannahcodes@protonmail.com and I will get back to you as soon as I can. </h6>
                {/* Success Message when form is successfully sent */}
                <span className="success-message"> { successMessage } </span>
            </div>
            <div className="container">
                {/* Form Submit */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row"> 
                        <div className="col-md-6 col-xs-12 p-2">
                            {/* Name Input */}
                            <input 
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            {...register("name", 
                            { required: true, 
                                maxLength:20,
                                pattern: {
                                    message: 'Please enter a valid name',
                                }
                            })}
                            />
                            {/* {errors.firstName && <p>Please enter your name</p>} */}
                            <ErrorMessage
                                errors={errors}
                                name="multipleErrorInput"
                                render={({ messages }) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p className="error-message" key={type}>{message}</p>
                                ))
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
                            placeholder="Email"
                            name="email"
                            {...register("email", 
                            { required: true, 
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Email is invalid"
                                }
                            })}
                            // ref= {
                            //     register("email",
                            //     {
                            //         required: "Please enter your email",
                            //         pattern: {
                            //             // Email Regex //
                            //             value: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
                            //             message: "Invalid Email"
                            //         }
                            //     })
                            // }
                            />
                            {/* {errors.email && <p>Please check that the email is correct</p>} */}
                            <ErrorMessage
                                errors={errors}
                                name="multipleErrorInput"
                                render={({ messages }) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p className="error-message" key={type}>{message}</p>
                                    ))
                                }
                            />
                            {/* Subject */}
                            <input 
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            {...register("subject", {required: "Please add the subject"})}
                            />
                            {/* {errors.email && <p>Please enter a subject</p>} */}
                            <ErrorMessage
                                errors={errors}
                                name="multipleErrorInput"
                                render={({ messages }) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p className="error-message" key={type}>{message}</p>
                                    ))
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
                            placeholder="Message"
                            name="message"
                            {...register("message", 
                                {required: "please fill out the form"
                            })}
                            ></textarea>
                            {/* {errors.email && <p>Please enter your message</p>} */}
                            <ErrorMessage
                                errors={errors}
                                name="multipleErrorInput"
                                render={({ messages }) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p className="error-message" key={type}>{message}</p>
                                    ))
                                }
                            />
                            {/* <span className="error-message">
                                {errors.message && errors.message.message}
                            </span> */}
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

export default Contact