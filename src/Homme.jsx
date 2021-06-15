import React from 'react';
import CheckBox from './CheckBox';

const Homme = (props) => {
    return (
        <>
         <h2>Composant Homme</h2>
         <CheckBox {...props}/>
        </>
    )

}

export default Homme;