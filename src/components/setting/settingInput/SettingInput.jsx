import React from 'react';

function SettingInput(props) {
    
    const changeValue = (e) => {
        if (!(e.target.value < 1) && !(e.target.value > 60)) {
            props.setValueToState(e.target.value)
        }
    }

    return (
        <input 
            type="number" 
            value={props.inputValue} 
            onChange={ (e) => changeValue(e)}                            
        />
    );
}

export default SettingInput;