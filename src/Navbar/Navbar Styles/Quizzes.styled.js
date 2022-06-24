import styled from 'styled-components'
import photo from '../../img/stPaul.jpg'

export const QuizPage = styled.div`
    width: 75%;
    background: rgb(253, 251, 251);
    height: 100vh;
    height: 100%;
    margin: auto;

    h1{
        text-align: center;
        padding-top: 40px;
        padding-bottom: 30px;
    }

    .quizzes_boxes {
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding-bottom: 24px;
        }

    .quizzes_boxes a {
        color: #000;
    }
    
    .quizzes_box {
        width: 450px;
        height: 200px;
        border-radius: 2px;
        margin: 10px;
        text-align: center;
        @media (max-width: 1350px) {
            width: 350px;
            height: 180px;
        }
        @media (max-width: 920px) {
            width: 300px;
            height: 150px;
        }
        @media (max-width: 800px) {
            width: 250px;
            height: 140px;
        }
        @media (max-width: 680px) {
            width: 80%;
            height: 130px;
        }
    }

    .quizzes_box_inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .quizzes_box:hover .quizzes_box_inner {
      transform: rotateY(180deg);
    }

    .quizzes_box_front {
      background: #1fc0fa;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
    }

    .quizzes_box_front,
    .quizzes_box_back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .quizzes_box_back {
      background-image: url(${photo});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      transform: rotateY(180deg);
    }

    .quizzes_box_back p {
      padding: 5px;
      color: white;
      font-weight: 600;
    }

    .blur {
      background-color: rgb(0, 0, 0); /* Fallback color */
      background-color: rgba(0, 0, 0, 0.6); /* Black w/opacity/see-through */
      color: white;
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 5%;
      text-align: center;
    }

    @media screen and (max-width: 560px){
      /* .quizzes_box{
        width: 80%;
        height: 140px;
      } */
      .quizzes_box_back{
        font-size: 12px;
      }
      .quizzes_box_back p {
        /* width: 100%; */
        padding-left: 20px;
      }
      .blur{
        width: 80%;
      }
    }


    @media (max-width: 1150px) {
        width: 90%;
    }
`