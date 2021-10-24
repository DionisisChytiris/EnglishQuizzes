import React from 'react'
// import '../style.css'
import { IoArrowRedo } from 'react-icons/io5'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    PronounsGrammar,
    PronounsSide,
    PronounsMain,
    PronounsBox1,
    PronounsBox2,
    PronounsBox3,
    PronounsContainer,
} from '../pronouns.styled'

const Pronouns_Grammar = () => {
    return (
        <PronounsGrammar>
            <PronounsSide>
                <SidebarGrammar/>
            </PronounsSide>
            <PronounsMain>
                <PronounsBox1>
                    <PronounsContainer>
                        <h1>Pronouns</h1>
                    </PronounsContainer>
                </PronounsBox1>
                <PronounsBox2>
                    <PronounsContainer>
                       World
                    </PronounsContainer>
                </PronounsBox2>
                <PronounsBox3>
                    <PronounsContainer>
                        !!!
                    </PronounsContainer>
                </PronounsBox3>
            </PronounsMain>
        </PronounsGrammar>
    )
}

export default Pronouns_Grammar
