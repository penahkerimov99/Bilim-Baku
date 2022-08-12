import React from 'react'
import Text from '../Typography'
import SingIn from './SingInButton'
import './style.scss'


const HeaderTitles = () => {
    return (
        <div className='description'>
            <Text variant='first-title'>
                Xəbərlər
            </Text>

            <Text variant='second-title'>
                Bilim Bakı Laboratoriyalarına qeydiyyat başladı!
            </Text>

            <SingIn />
        </div>
    )
}

export default HeaderTitles