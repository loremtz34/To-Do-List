// here is where the modal is renderized
import React from 'react';
import ReactDOM from 'react-dom';

class ModalContainer extends React.Component{
    render(){
       return (ReactDOM.createPortal(this.props.children, document.getElementById('Modal')))
    }
}
export default ModalContainer;