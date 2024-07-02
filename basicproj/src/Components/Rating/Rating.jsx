


import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"
import "./rating.css"

const Rating = ({num = 5}) => {

    const [rate,setRate] = useState(0);
    const [hover,setHover] = useState(0)

    const handelClick = (crrIndex) => {
            setRate(crrIndex)
    }

    const handelMouseEnter = (crrIndex) => {
        setHover(crrIndex)
    }
    const handelMouseLeave = (crrIndex) => {
        setHover(rate)
    }

  return (
    <div className='star'>
    {
        [...Array(num)].map((_, i) =>
        {
            i +=1 ;
            return<FaStar
                key={i}
                className={ i <= (hover || rate) ? "active" : "inactive"}
                onClick={()=>handelClick(i)}
                onMouseMove={()=>handelMouseEnter(i)}
                onMouseLeave={()=>handelMouseLeave(i)}
                size={40}
            />
        })
    }
    </div>
  )
}

export default Rating
