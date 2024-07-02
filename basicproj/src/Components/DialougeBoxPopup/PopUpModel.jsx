import React, { useState } from 'react'
import PopUp from './PopUp'

const PopUpModel = () => {

    const [show,setShow] = useState(false)

    const handelTogglePopUp = () => {
        setShow(!show)
    }

    const onClose = () =>{
        setShow(false)
    }

  return (
    <div>
      <button onClick={handelTogglePopUp} >Open Model </button>
      {
        show && <PopUp
        onClose={onClose}
            body={<div>Customized Body</div>}
        />
      }
    </div>
  )
}

export default PopUpModel
