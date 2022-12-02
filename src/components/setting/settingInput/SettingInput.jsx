import React from 'react';

function SettingInput(props) {
    return (
        <input 
            type="number" 
            value={props.inputValue} 
            onChange={ (e) => props.setValueToState(e.target.value)}                            
        />
    );
}

export default SettingInput;