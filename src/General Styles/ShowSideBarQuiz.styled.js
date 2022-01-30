import styled from 'styled-components'

export const ShowSideBarButton = styled.div`
    display: none;

    @media (max-width: 850px){
        display: block;
        position: absolute;
        top: 70px;
        left: 20px;
        opacity: 1;

        button{
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--cl-primary-darkblue);
            /* width: 100vh; */
            cursor: pointer;
        }
        .icon{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: white;
        }
        .a{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            /* position: absolute; */
            /* opacity: 999; */
            padding: 10px 15px;
            color: white;
            margin-left: 300px;
        }
        .a:hover{
            background-color: green;
        }
        .icon:hover{
            /* transform: rotate(270deg); */
        }
    }
`
export const ShowContent = styled.div`
    display: none;

    @media (max-width: 850px){
        display: block;
        position: absolute;
        top: 15px;
        left: 190px;
        opacity: 1;
    }
`