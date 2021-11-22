import styled from 'styled-components'

export const SidebarMain = styled.div`
  width: 170px;
  background-color: var(--cl-primary-lightgrey);
  height: 100%;
  padding-top: 90px;
  font-size: 18px;
  margin: 50px 30px 50px 30px;
  /* top: 100px;
  position: sticky;
  overflow: hidden; */
  border-radius: 5px;

  h4 {
    margin-top: -90px;
    font-size: 20px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* h6{
    font-size: 10px;
    color: red;
    margin: 0px 0px -8px 30px;
  } */
  .line1{
    border: 0.1rem solid white;
    margin-bottom: 30px;
  }
  p {
    margin: 8px 0px 8px 40px ;
    font-size: 18px;
    
  }
  p:hover {
    color: white;
  }
  .is-active{
      font-weight: bold;
  }
  a{
    color: rgb(34, 34, 34);
  }
  a:hover{
      color: white;
  }
  .book {
      /* padding: 5px; */
      display: flex;
      align-items: center;
      justify-content: center;
  }
  @media (max-width: 850px){
      display: none;
  }
`

export const SidebarContainerFixed = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;

  .line{
    width: 40%;
    height: 1px;
    background-color: black;
    margin: -5px auto 40px auto;
  }
  .home-buttons {
    text-align: center;
    margin: 10px;
  }
  .home-buttons:hover {
    color: white;
  }
`



