import React from 'react';
import '../app.css';

const modal= (props)=>{
    return(
        <div className="Modal">
        <select name="OS">
            <option value="1">Windows Vista</option> 
            <option value="2">Windows 7</option> 
            <option value="3">Windows XP</option>
            <option value="10">Fedora</option> 
            <option value="11">Debian</option> 
            <option value="12">Suse</option> 
        </select>
        <button>wenas</button>
        <button onClick={props.modalClose}>CERRAR</button>
        </div>
    );
}
export default modal;