import './App.css'
import { useState } from 'react'
import {Modal} from './modal/modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="modal-container">
      <h1>Modal window</h1>
      <button onClick={() => setIsOpen(true)} className='primary-button'>Modal</button>
      {isOpen && <Modal title="Modal title" closeModal={setIsOpen}>Modal content</Modal>}
    </div>
  )
}

export default App
