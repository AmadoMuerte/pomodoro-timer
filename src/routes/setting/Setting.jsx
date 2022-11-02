import React from 'react';
import { NavLink } from 'react-router-dom';
import './Setting.css'
import SettingInput from './settingInput/SettingInput';

function Setting(props) {

    const {
            timePomo, setTimePomo,
            timeBreak, setTimeBreak, 
            timeLongBreak, setTimeLongBreak,
            saveSetting
        } = props

    return (
        <div className='setting'>
            <div className='setting__inner'>
                <div className='setting__head'>
                    <p>
                        Timer setting
                    </p>
                    <NavLink className={'setting__btn'} to={`/`}>
                        <p>X</p>
                    </NavLink>
                </div>
                <div className='setting__bottom'>                    
                    <div className='setting__timer'>
                        <p>Pomodoro</p>
                        <SettingInput 
                            inputValue={timePomo} 
                            valueChanger={setTimePomo}
                        />
                    </div>
                    <div className='setting__timer'>
                        <p>Short Break</p>
                        <SettingInput 
                            inputValue={timeBreak} 
                            valueChanger={setTimeBreak}
                            />
                    </div>
                    <div className='setting__timer'>
                        <p>Long Break</p>                        
                        <SettingInput 
                        inputValue={timeLongBreak} 
                        valueChanger={setTimeLongBreak}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;