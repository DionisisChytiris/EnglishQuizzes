import React from 'react'
import { VerbsData1, VerbsData2, VerbsData3, VerbsData4, VerbsData5, VerbsData6, VerbsData7, VerbsData8} from './irregularVerbsData'
import Carousel from 'react-elastic-carousel'
import '../styleGeneral.css'
import { IoClose } from 'react-icons/io5'

export const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
            {showModal ? (
                <>
                    <div className='background'>
                        <Carousel>
                            <div className='container-test'>
                                <div className="container-title-box">
                                    <h3>Irregular Verbs</h3>
                                    <div className='container-test-title'>
                                        <div>infinitive</div>
                                        <div>past Simple</div>
                                        <div>past Participle</div>
                                    </div>
                                </div>
                                {VerbsData1.map((a) => {
                                    const { infinitive, pastSimple, pastParticiple } = a
                                    return (
                                        <>
                                            <div className="container-columns">
                                                <div className='container_1'>{infinitive}</div>   
                                                <div className='container_2'>{pastSimple}</div>   
                                                <div className='container_3'>{pastParticiple}</div>   
                                            </div>
                                        </>
                                    )
                                })}
                           </div>                                                     
                            <div className='container-test'>
                                <div className="container-title-box">
                                    <h3>Irregular Verbs</h3>
                                    <div className='container-test-title'>
                                        <div>infinitive</div>
                                        <div>past Simple</div>
                                        <div>past Participle</div>
                                    </div>
                                </div>
                                {VerbsData2.map((a) => {
                                    const { infinitive, pastSimple, pastParticiple } = a
                                    return (
                                        <>
                                            <div className="container-columns">
                                                <div className='container_1'>{infinitive}</div>   
                                                <div className='container_2'>{pastSimple}</div>   
                                                <div className='container_3'>{pastParticiple}</div>   
                                            </div>
                                        </>
                                    )
                                })}
                           </div>                                                     
                            <div className='container-test'>
                                <div className="container-title-box">
                                    <h3>Irregular Verbs</h3>
                                    <div className='container-test-title'>
                                        <div>infinitive</div>
                                        <div>past Simple</div>
                                        <div>past Participle</div>
                                    </div>
                                </div>
                                {VerbsData3.map((a) => {
                                    const { infinitive, pastSimple, pastParticiple } = a
                                    return (
                                        <>
                                            <div className="container-columns">
                                                <div className='container_1'>{infinitive}</div>   
                                                <div className='container_2'>{pastSimple}</div>   
                                                <div className='container_3'>{pastParticiple}</div>   
                                            </div>
                                        </>
                                    )
                                })}
                           </div>                                                     
                            <div className='container-test'>
                                <div className="container-title-box">
                                    <h3>Irregular Verbs</h3>
                                    <div className='container-test-title'>
                                        <div>infinitive</div>
                                        <div>past Simple</div>
                                        <div>past Participle</div>
                                    </div>
                                </div>
                                {VerbsData4.map((a) => {
                                    const { infinitive, pastSimple, pastParticiple } = a
                                    return (
                                        <>
                                            <div className="container-columns">
                                                <div className='container_1'>{infinitive}</div>   
                                                <div className='container_2'>{pastSimple}</div>   
                                                <div className='container_3'>{pastParticiple}</div>   
                                            </div>
                                        </>
                                    )
                                })}
                           </div>                                                     
                            <div className='container-test'>
                                <div className="container-title-box">
                                    <h3>Irregular Verbs</h3>
                                    <div className='container-test-title'>
                                        <div>infinitive</div>
                                        <div>past Simple</div>
                                        <div>past Participle</div>
                                    </div>
                                </div>
                                {VerbsData5.map((a) => {
                                    const { infinitive, pastSimple, pastParticiple } = a
                                    return (
                                        <>
                                            <div className="container-columns">
                                                <div className='container_1'>{infinitive}</div>   
                                                <div className='container_2'>{pastSimple}</div>   
                                                <div className='container_3'>{pastParticiple}</div>   
                                            </div>
                                        </>
                                    )
                                })}
                           </div>                                                     
                            <div className='container-test'>
                                <div className="container-title-box">
                                    <h3>Irregular Verbs</h3>
                                    <div className='container-test-title'>
                                        <div>infinitive</div>
                                        <div>past Simple</div>
                                        <div>past Participle</div>
                                    </div>
                                </div>
                                {VerbsData6.map((a) => {
                                    const { infinitive, pastSimple, pastParticiple } = a
                                    return (
                                        <>
                                            <div className="container-columns">
                                                <div className='container_1'>{infinitive}</div>   
                                                <div className='container_2'>{pastSimple}</div>   
                                                <div className='container_3'>{pastParticiple}</div>   
                                            </div>
                                        </>
                                    )
                                })}
                           </div>                                                     
                            <div className='container-test'>
                                <div className="container-title-box">
                                    <h3>Irregular Verbs</h3>
                                    <div className='container-test-title'>
                                        <div>infinitive</div>
                                        <div>past Simple</div>
                                        <div>past Participle</div>
                                    </div>
                                </div>
                                {VerbsData7.map((a) => {
                                    const { infinitive, pastSimple, pastParticiple } = a
                                    return (
                                        <>
                                            <div className="container-columns">
                                                <div className='container_1'>{infinitive}</div>   
                                                <div className='container_2'>{pastSimple}</div>   
                                                <div className='container_3'>{pastParticiple}</div>   
                                            </div>
                                        </>
                                    )
                                })}
                           </div>                                                     
                            <div className='container-test'>
                                <div className="container-title-box">
                                    <h3>Irregular Verbs</h3>
                                    <div className='container-test-title'>
                                        <div>infinitive</div>
                                        <div>past Simple</div>
                                        <div>past Participle</div>
                                    </div>
                                </div>
                                {VerbsData8.map((a) => {
                                    const { infinitive, pastSimple, pastParticiple } = a
                                    return (
                                        <>
                                            <div className="container-columns">
                                                <div className='container_1'>{infinitive}</div>   
                                                <div className='container_2'>{pastSimple}</div>   
                                                <div className='container_3'>{pastParticiple}</div>   
                                            </div>
                                        </>
                                    )
                                })}
                           </div>                                                     
                        </Carousel>
                                                  
                        <div className="hey" onClick={() => setShowModal(prev => !prev)} ><IoClose/></div>
                    </div>
                </>
            ) : null}           
        </>
    )
}
