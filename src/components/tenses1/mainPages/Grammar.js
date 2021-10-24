import React from 'react'
// import '../style.css'
import {IoArrowRedo} from 'react-icons/io5'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    Tenses1Grammar,
    Tenses1Side,
    Tenses1Main,
    Tenses1Box1,
    Tenses1Box2,
    Tenses1Box3,
    Tenses1Container,
} from '../tenses1.styled'

const Tenses1_Grammar = () => {
    return (
        <Tenses1Grammar>
            <Tenses1Side>
                <SidebarGrammar/>
            </Tenses1Side>
            <Tenses1Main>
                <Tenses1Box1>
                    <Tenses1Container>
                        <h1>Tenses 1</h1>
                    </Tenses1Container>
                </Tenses1Box1>
                <Tenses1Box2>
                    <Tenses1Container>
                       World
                    </Tenses1Container>
                </Tenses1Box2>
                <Tenses1Box3>
                    <Tenses1Container>
                        !!!
                    </Tenses1Container>
                </Tenses1Box3>
            </Tenses1Main>
        </Tenses1Grammar>
    )
}

export default Tenses1_Grammar
