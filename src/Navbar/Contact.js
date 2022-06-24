import React, {useRef} from 'react'
import styled from 'styled-components'
// import emailjs from 'emailjs-com'
import photo3 from '../img/large.jpg'
import emailjs from '@emailjs/browser'

const ContactPage = styled.div`
    background-image: url(${photo3});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
`
const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 500px;
    margin:auto;
    color: white;
    background-color: grey;
    position: relative;
    top: 20%;
    border-radius: 20px;
    h1{
        margin-top: -100px;
    }
    form{
        width: 300px;
        padding-top: 20px;
    }
`

const Contact = () => {

    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_ggomfi4', 
            'template_c387o2p',
            form.current, 
            'ozFxcxse477DoA5Bh'
            ).then(res=>{
                console.log(res.text)
                console.log('Message sent!')
                e.target.reset()  //use this line of code to clear the form after successful submit

            }).catch(err=>console.log(err.text))
    }

    return (
        <>
            <ContactPage>
                <ContactContainer>
                    <h1>Contact Form</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input
                            pattern="[a-zA-Z\s]+" 
                            title="Please enter on alphabets only."
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
