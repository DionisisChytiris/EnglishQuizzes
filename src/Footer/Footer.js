import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const FooterSection = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    background: var(--cl-primary-darkblue);
    color: white;
    .copyright{
        text-align: center;
        position: relative;
        top: -50px;
        font-size: 12px;
        color: lightgrey
    }
    @media (max-width: 650px){
     .copyright{
         top: -20px;
     }
  }
`
const FooterContainer = styled.div`
  padding: 80px;
  border-top: 0.1rem solid rgb(122, 182, 241);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px){
      flex-direction: column;
      padding: 40px;
  }
  `
const FooterColumn = styled.div`
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    .link{
        color: white;
        padding: 3px;
    }
    .link:hover{
        color: lightblue;
    }
    @media (max-width: 650px){
        align-items: center;
        margin: 10px;
    }
`

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterColumn>
                    <Link to='/about' className='link'>About</Link>
                    <Link to='/contact' className='link'>Contact</Link>
                    <Link to='/grammar' className='link'>Grammar</Link>
                    <Link to='/quizzes' className='link'>Grammar Quizzes</Link>
                </FooterColumn>
                <FooterColumn>
                    <Link to='/about' className='link'>About</Link>
                    <Link to='/contact' className='link'>Contact</Link>
                    <Link to='/' className='link'>Term of Use</Link>
                    <Link to='/' className='link'>Term of Use</Link>
                </FooterColumn>
            </FooterContainer>
            <div className='copyright'>copyright 2022</div>
        </FooterSection>
    )
}

export default Footer
