import React from 'react';
import ReactDOM from 'react-dom';


const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss}>
        <div onClick={(e) => e.stopPropagatio()}>
            <h3>{props.title}</h3>
            <div>{props.content}</div>
            <div>
                {props.actions}
            </div>
        </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;