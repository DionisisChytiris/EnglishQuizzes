import React from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm()
    }

    return (
        <>
            <div className="contact_page">
                <div className="contact-box">
                    <h1>Contact Form</h1>
                    <form onSubmit={sendEmail}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Your name...'
                            autoComplete='text'
                            maxLength='20'
                            required
                        />
                        
                        <label>Email</label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder='Your email...'
                            required
                        />
                        
                        <label>Message</label>
                        <textarea
                            name="message"
                            rows='4'
                            placeholder='Message...'
                            maxLength='350'
                        />
                        <input
                            type="submit"
                            value="Send"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
