import React from 'react';

function SettingInput(props) {

    const setTimeValue = (e, func) => {
        func(e.target.value)
    }

    return (
        <input 
            type="number" 
            value={props.inputValue} 
            onChange={ (e) => setTimeValue(e, props.valueChanger)}                            
        />
    );
}

export default SettingInput;