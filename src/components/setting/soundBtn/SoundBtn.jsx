import React from 'react';
import useSound from 'use-sound';

import { useDispatch } from 'react-redux';
import { changeSound } from '../../../store/slice/setting/settingSlice';

import './SoundBtn.css'

import sound_01 from '../../../sounds/01.mp3'
import sound_02 from '../../../sounds/02.mp3'
import sound_03 from '../../../sounds/03.mp3'
import sound_04 from '../../../sounds/04.mp3'

function SoundBtn(props) {
    const [soundOne] = useSound(sound_01)
    const [soundTwo] = useSound(sound_02)
    const [soundThree] = useSound(sound_03)
    const [soundFour] = useSound(sound_04)

    const dispatch = useDispatch()

    const selectSound = (e) => {
        if (e.target.value === 'sound one') {
            soundOne()
            dispatch(changeSound(sound_01))

        } else if (e.target.value === 'sound two') {
            soundTwo()
            dispatch(changeSound("sound two"))

        } else if (e.target.value === 'sound three') {
            soundThree()
            dispatch(changeSound("sound three"))

        } else if (e.target.value === 'sound four') {
            soundFour()
            dispatch(changeSound("sound four"))
        }
    }

    return (
        <select className='sound'>
            <option hidden>Sound</option>
            <option onClick={e => selectSound(e)}>sound one</option>
            <option onClick={e => selectSound(e)}>sound two</option>
            <option onClick={e => selectSound(e)}>sound three</option>
            <option onClick={e => selectSound(e)}>sound four</option>
        </select>
    );
}

export default SoundBtn;