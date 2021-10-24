import React, {useState} from 'react'
import { Modal } from './Modal'
import '../styleGeneral.css'

function Button1() {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <>
            <button className='button1' onClick={openModal}>Click me!</button>
            <div className='container2'>
                <Modal showModal={showModal} setShowModal={setShowModal}/>
                {/* {showModal ? <div>Modal</div> : null}  */}
            </div>
        </>
    )
}

export default Button1

