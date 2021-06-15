import React from 'react';
import CheckBox from './CheckBox';

const Femme = (props) => {
    return (
        <>
         <h2>Composant Femme</h2>
         <CheckBox {...props}/>
        </>
    )

}

export default Femme;