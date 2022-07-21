import React from 'react'
import ReactDom from 'react-dom'

import './Backdrop.css'

export const Backdrop = (props) => {
  
    return ReactDom.createPortal(
        <div className='backdrop' onClick={props.onClick}></div>,
        document.getElementById('backdrop-hook')
    )
}
