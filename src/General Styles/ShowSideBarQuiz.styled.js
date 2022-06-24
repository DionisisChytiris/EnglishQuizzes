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
            background-color: lightgrey;
            cursor: pointer;      
        }
        .icon{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: var(--cl-primary-darkblue) ;
        }
        .icon:hover{
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: grey;
        }
        .a{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            padding: 10px 15px;
            color: var(--cl-primary-darkblue);
        }
        .a:hover{
            background-color: grey;
        }
    }
`
export const ShowContent = styled.div`
    display: none;

    @media (max-width: 850px){
        display: block;
        position: absolute;
        top: 15px;
        /* left: 190px; */
        left: 220px;
        opacity: 1;
    }
`