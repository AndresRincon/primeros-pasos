import React from 'react';
import './output.css';


const userOutpouts = (props) => {
    return (
        <div>
            <p style={props.style}>Soy el usuario {props.user}</p>
            <p>Parrafo dos</p>
        </div>
    )
}

export default userOutpouts;