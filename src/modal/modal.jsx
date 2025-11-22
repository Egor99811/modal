import { createPortal } from "react-dom"
import './modal.css'

export function Modal({title, closeModal, children}) {
    return createPortal(
        <div className="modal">
            <h1>{title}</h1>
            {children}
            <button onClick={() => closeModal(false)} className='modal__button'>Close</button>
        </div>,
        document.getElementById('modal')
    )
}