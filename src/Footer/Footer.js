import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  height: 100%;
  background: var(--cl-primary-darkblue);
  color: white;
  text-align: center;
  padding: 80px;
  border-top: 0.1rem solid rgb(122, 182, 241);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const FooterColumn = styled.div`
    padding: 0px 50px;
`

const Footer = () => {
    return (
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
    )
}

export default Footer
