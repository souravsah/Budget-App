import React,{useContext} from 'react'
import Theme from '../../components/SettingPage/Theme'
import { GlobalContext } from '../../context/EXpencecontext/Expencecontext'
import Appearance from '../../core/Appearance'
const SettingPageappearance = () => {
    let {theme} = useContext(GlobalContext)
    document.body.style = `background: ${theme.main.backgroundColor};`;

    return (
        <div>
        <div className="container setting1">
        <Appearance/>
        <Theme/>
        </div>
        </div>
    )
}

export default SettingPageappearance
