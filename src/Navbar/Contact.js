import React from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
// import photo from '../img/colors.jpg'
// import photo1 from '../img/londoneyetiny.jpg'
// import photo2 from '../img/small.jpg'
import photo3 from '../img/large.jpg'

const ContactPage = styled.div`
    background-image: url(${photo3});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
`
const ContactContainer = styled.div`
    width: 200px;
    height: 100%;
    margin-left: 65%;
    padding-top: 200px;
    color: white;
`

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm()
    }

    return (
        <>
            <ContactPage>
                <ContactContainer>
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
                </ContactContainer>
            </ContactPage>
        </>
    )
}

export default Contact
