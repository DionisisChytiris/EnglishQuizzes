import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    background: var(--cl-primary-darkblue);
    color: white;
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
    @media (max-width: 650px){
        margin: 10px;
    }
`

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterColumn>
                    <div>hello world</div>
                    <div>hello world</div>
                    <div>hello world</div>
                    <div>hello world</div>
                    <p>copyright 2021</p>
                </FooterColumn>
                <FooterColumn>
                    <div>hello world</div>
                    <div>hello world</div>
                    <div>hello world</div>
                    <div>hello world</div>
                    <p>copyright 2021</p>
                </FooterColumn>
                <FooterColumn>
                    <div>hello world</div>
                    <div>hello world</div>
                    <div>hello world</div>
                    <div>hello world</div>
                    <p>copyright 2021</p>
                </FooterColumn>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
