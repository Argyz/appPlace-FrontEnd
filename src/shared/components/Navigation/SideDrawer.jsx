import React, { useRef } from 'react';
import  ReactDOM  from 'react-dom';

import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

export const SideDrawer = (props) => {
    
    const nodeRef=useRef();
    
    const content=
    <CSSTransition
        nodeRef={nodeRef}
        in={props.show}
        className='side-drawer'
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
        >
            
            <aside className='side-drawer' ref={nodeRef} onClick={props.onClick}>{props.children}</aside>
    </CSSTransition> 

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}
