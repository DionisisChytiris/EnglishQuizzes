import styled from 'styled-components'

export const SidebarMain = styled.div`
  padding-top: 90px;
  left: 0;
  width: 170px;
  /* height: 100%; */
  background-color: var(--cl-primary-lightgrey);
  font-size: 18px;
  margin: 50px 20px 50px 30px;
  border-radius: 20px;
  /* border: 0.05rem solid white; */
  h4 {
    margin-top: -90px;
    font-size: 20px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--cl-primary-darkblue);
  }
  .line1{
    border: 0.1rem solid white;
    margin-bottom: 30px;
  }
  p {
    margin: 10px auto ;
    font-size: 15px;
    width: 90px;
    height: 35px;
    background-color: var(--cl-primary-blue);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p:hover {
    color: white;
    background-color: var(--cl-primary-darkblue);
  }
  .is-active{
      font-weight: bold;
  }
  .is-active p {
    background-color: var(--cl-primary-darkblue);
    color: white;
    font-size: 14px;
  }
  a{
    color: rgb(34, 34, 34);
  }
  a:hover{
      /* color: white; */
  }
  .book {
      /* padding: 5px; */
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  @media (max-width: 850px){
    width: 220px;
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    margin-top: 110px;
    margin-left: -220px;
    background: linear-gradient(to bottom right, #00003A 5%,#0707A9 );
    /* background-color: var(--cl-primary-darkblue); */
    h4{
      color: white;
    }
    .line1{
    margin-bottom: 60px;
  }
    p{
      background-color: transparent;
      font-size: 18px;
      width: 60%;
    }
    p:hover{
      background-color: var(--cl-primary-lightgrey);
      color: black;
    }
    .is-active p{
      font-size: 18px;
      text-decoration: underline;
    }
    a{
      color:  white;
    }
  } 
`
export const SidebarContainerFixed = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;

  .line{
    width: 40%;
    height: 1px;
    background-color: black;
    margin: -5px auto 20px auto;
  }
  .home-buttons {
    /* color: var(--cl-primary-darkblue); */
    border-bottom: 0.05rem solid lightgrey;
    margin: 10px auto ;
    font-size: 16px;
    width: 60px;
    height: 35px;
    /* background-color: var(--cl-primary-blue); */
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-buttons:hover {
    width: 90px;
    border-radius: 20px;
    color: var(--cl-primary-darkblue);
    background-color: var(--cl-secondary-lightgrey);
  }
`



