import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../context/EXpencecontext/Expencecontext'

const Appearance = () => {
    let [toggleProfile,settoggleProfile]=useState(true)
    let [toggleApperance,settoggleApperance]=useState(false)
    let {theme}=useContext(GlobalContext);
    let history = useHistory();
    const handleProfile = () =>{
        settoggleProfile(!toggleProfile)
        if(toggleApperance===true){
            settoggleApperance(false)
        }
        history.push('/settings')
    }
    const handleApperance = ()=>{
        settoggleApperance(!toggleApperance)
        if(toggleProfile===true){
            settoggleProfile(false)
        }

        history.push('/theme1')
    }
    const handleTheme = () =>{
        history.push('/theme')
    }
    return (
        <ul className="setting-left" style={theme.Appearance}>
            <li><strong>Account Settings</strong></li>
            {/* <ul className={`completedList ${toggle ? "active" : ""} `}> */}

            <li className={`profile  ${toggleProfile?"border":""}`} onClick={handleProfile}>Profile</li>
            <li className={`  ${toggleApperance?"border":""}`} onClick={handleApperance}>Appearance</li>
            

        </ul>
    )
}

export default Appearance
