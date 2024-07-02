


import React from 'react'
import "./pop.css"

const PopUp = ({id,header,body,footer,onClose }) => {

  return (
    <div id={id || "Modal"} className='modal'>
      <div className='modal-content'>
            <div className='header'>
                <spna className={"close-modal-icon"} onClick={onClose}>&times;</spna>
                <h2>{header ? header : "Header"}</h2>
            </div>
            <div className='body'>
                {
                    body ? body : <div>
                        <p>This is our modal body</p>
                    </div>
                }
            </div>
            <div className='foooter'>
                {
                    footer ? footer : <h2>Footer</h2>
                }
            </div>
      </div>
    </div>
  )
}

export default PopUp
