import React from 'react';
import './Setting.css'
import { NavLink } from 'react-router-dom';
import SettingInput from './settingInput/SettingInput';

import { setPomoTime, setBreakTime,
         setLongBreakTime, LongBreakIntervalTime 
       } from '../../store/slice/setting/settingSlice';

import { useDispatch, useSelector } from 'react-redux';
import SoundBtn from './soundBtn/SoundBtn';

function Setting(props) {
    const dispatch = useDispatch()
    const {
        timePomo, timeBreak, timeLongBreak,
        longBreakInterval, sound
    } = useSelector(state => state.setting)

    const pushSettingToStorage = () => {
        const setting = 
        {
            timePomo, timeBreak, timeLongBreak,
            longBreakInterval, sound
        }   
        localStorage.setItem("setting", JSON.stringify(setting))
    }
    pushSettingToStorage()

    const setPomo = (action) => { 
        dispatch(setPomoTime(action))
    }
    const setBreak = (action) => { 
        dispatch(setBreakTime(action))
    }
    const setLongBreak = (action) => { 
        dispatch(setLongBreakTime(action))
    }
    const setLongBreakInterval = (action) => { 
        dispatch(LongBreakIntervalTime(action))
    }   

    return (
        <div className='setting'>
            <div className='container'>
            <div className='setting__inner'>
                <div>
                    <div className='setting__head'>
                        <p>
                            Timer setting
                        </p>
                        <NavLink 
                            className={'setting__btnBack'} 
                            to={`/`}                            
                        >
                            <p>X</p>
                        </NavLink>
                    </div>
                    <div className='setting__bottom'>                    
                        <div className='setting__timer'>
                            <p>Pomodoro</p>
                            <SettingInput 
                                inputValue={timePomo}                                 
                                setValueToState={setPomo}
                            />
                        </div>
                        <div className='setting__timer'>
                            <p>Short Break</p>
                            <SettingInput 
                                inputValue={timeBreak} 
                                setValueToState={setBreak}
                                />
                        </div>
                        <div className='setting__timer'>
                            <p>Long Break</p>                        
                            <SettingInput 
                            inputValue={timeLongBreak} 
                            setValueToState={setLongBreak}
                            />
                        </div>
                        <div className='setting__timer'>
                            <p>Interval</p>                        
                            <SettingInput 
                            inputValue={longBreakInterval} 
                            setValueToState={setLongBreakInterval}
                            />
                        </div>
                        <div className='setting__timer'>
                            <p>Sound</p>
                            <SoundBtn />
                        </div>
                    </div>
                </div>                                                                      
            </div>
            </div>
        </div>
    );
}

export default Setting;