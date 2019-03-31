import React from 'react';
//import './Person.css';
const userinputs = (prop) => {
    return <input onChange={prop.evento} value={prop.user} />
}

export default userinputs;