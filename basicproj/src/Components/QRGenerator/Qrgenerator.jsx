

import React, { useState } from 'react'
import QrCode from "react-qr-code"

const Qrgenerator = () => {

  const [qrCode,setQrCode] = useState('')
  const [input,setInput] = useState('')

  const handelGenrateqr = () =>{
    setQrCode(input)
    setInput('')
  }

  return (
    <div>
        <h1>Qr Genrator</h1>
        <div>
          <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" name="qr-code" placeholder="Enter your text" />
          <button disabled={input && input.trim() !== "" ? false:true} onClick={handelGenrateqr}>Genrate</button>
        </div>
        <div>
          <QrCode
            id="qr-code-val"
            value={input}
            size={400}
            bgColor='white'
          />
        </div>
    </div>
  )
}

export default Qrgenerator
