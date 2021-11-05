import React from 'react'
import Profile from '../../components/Profile/Profile'
import Appearance from '../../core/Appearance'
const SettingsPage = () => {
    return (
        <div>
        <div className="container setting1">
        <Appearance/>
        <Profile/>
        </div>
        </div>
    )
}

export default SettingsPage
