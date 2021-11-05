import React from 'react'
import { useHistory } from 'react-router'

const Appearance = () => {
    let history = useHistory();
    const handleProfile = () =>{
        history.push('/settings')
    }
    const handleApperance = ()=>{
        history.push('/theme')
    }
    return (
        <ul className="setting-left">
            <li><strong>Account Settings</strong></li>
            <li className="profile" onClick={handleProfile}>Profile</li>
            <li onClick={handleApperance}>Appearance</li>
            
        </ul>
    )
}

export default Appearance
