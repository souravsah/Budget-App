import React, { useState,useContext } from 'react'
import { BiRadioCircle } from 'react-icons/bi';
import { AiFillCheckCircle } from 'react-icons/ai';
import initialtheme from "/home/sourav/Desktop/React-router-app/src/Theme/initialtheme"
import { GlobalContext } from "../../context/EXpencecontext/Expencecontext";
import Defaultdark from "../../Theme/Deafaultdark"
import Darkdimmed from "../../Theme/Darkdimmed"
import Darkhighcontract from "../../Theme/Darkhighcontract"
import Darkcolorblind from "../../Theme/Darkcolorblind"
import Lightcolorblind from "../../Theme/Lightcolorblind"
import "./theme.css"
const Theme = () => {
    let {initialTheme,theme} = useContext(GlobalContext);
    let [toggle1,settoggle1] = useState(false)
    let [toggle2,settoggle2] = useState(false)
    let [toggle3,settoggle3] = useState(false)
    let [toggle4,settoggle4] = useState(false)
    let [toggle5,settoggle5] = useState(false)
    let [toggle6,settoggle6] = useState(false)
    console.log(initialtheme)
    
    const handletheme2 = () =>{

        settoggle2(!toggle2)
        initialTheme(Defaultdark)

        if(toggle1===true ){
            settoggle1(false)
        }
        if(toggle3===true ){
            settoggle3(false)
        }
        if(toggle4===true ){
            settoggle4(false)
        }
        if(toggle5===true ){
            settoggle5(false)
        }
        if(toggle6===true ){
            settoggle6(false)
        }


    }
    const handletheme6 = () =>{
        settoggle6(!toggle2)
        initialTheme(Lightcolorblind)
        if(toggle1===true ){
            settoggle1(false)
        }
        if(toggle3===true ){
            settoggle3(false)
        }
        if(toggle4===true ){
            settoggle4(false)
        }
        if(toggle5===true ){
            settoggle5(false)
        }
        if(toggle2===true ){
            settoggle2(false)
        }


    }

    const handletheme1 = () =>{
        settoggle1(!toggle1)
        initialTheme(initialtheme)
        if(toggle2===true ){
            settoggle2(false)
        }
        if(toggle3===true ){
            settoggle3(false)
        }
        if(toggle4===true ){
            settoggle4(false)
        }
        if(toggle5===true ){
            settoggle5(false)
        }
        if(toggle6===true ){
            settoggle6(false)
        }


    }
    const handletheme3 = () =>{
        settoggle3(!toggle1)
        initialTheme(Darkdimmed)
        if(toggle2===true ){
            settoggle2(false)
        }
        if(toggle1===true ){
            settoggle1(false)
        }
        if(toggle4===true ){
            settoggle4(false)
        }
        if(toggle5===true ){
            settoggle5(false)
        }
        if(toggle6===true ){
            settoggle6(false)
        }


    }
    const handletheme4 = () =>{
        settoggle4(!toggle1)
        initialTheme(Darkhighcontract)
        if(toggle2===true ){
            settoggle2(false)
        }
        if(toggle1===true ){
            settoggle1(false)
        }
        if(toggle3===true ){
            settoggle3(false)
        }
        if(toggle5===true ){
            settoggle5(false)
        }
        if(toggle6===true ){
            settoggle6(false)
        }


    }
    const handletheme5 = () =>{
        settoggle5(!toggle1)
        initialTheme(Darkcolorblind)
        if(toggle2===true ){
            settoggle2(false)
        }
        if(toggle1===true ){
            settoggle1(false)
        }
        if(toggle4===true ){
            settoggle4(false)
        }
        if(toggle3===true ){
            settoggle3(false)
        }
        if(toggle6===true ){
            settoggle6(false)
        }


    }


    return (
        <div className="theme" style={theme.themebox

        }>
        <div className="THeme1">
            <img src="https://github.githubassets.com/images/modules/settings/color_modes/light_preview.svg" alt="" />
            <div> <span onClick={handletheme1}>{toggle1?<AiFillCheckCircle/>:<BiRadioCircle />}</span> <h3>Default Light</h3></div>
        </div>
        <div className="THeme2">
        <img src="https://github.githubassets.com/images/modules/settings/color_modes/dark_preview.svg" alt="" />
            <div> <span onClick={handletheme2}>{toggle2?<AiFillCheckCircle/>:<BiRadioCircle />}</span> <h3>Default Dark</h3></div>

        </div>
        <div className="THeme3">
        <img src="https://github.githubassets.com/images/modules/settings/color_modes/dark_dimmed_preview.svg" alt="" />
            <div> <span onClick={handletheme3}>{toggle3?<AiFillCheckCircle/>:<BiRadioCircle />}</span> <h3>Dark Dimmed</h3></div>

        </div>
        <div className="THeme4">
        <img src="https://github.githubassets.com/images/modules/settings/color_modes/dark_high_contrast_preview.svg" alt="" />
            <div> <span onClick={handletheme4}>{toggle4?<AiFillCheckCircle/>:<BiRadioCircle />}</span> <h3>Dark HIgh Contrast</h3></div>

        </div>
        <div className="THeme5">
        <img src="https://github.githubassets.com/images/modules/settings/color_modes/dark_colorblind_preview.svg" alt="" />
            <div> <span onClick={handletheme5}>{toggle5?<AiFillCheckCircle/>:<BiRadioCircle />}</span> <h3>Dark Colorblind</h3></div>

        </div>
        <div className="THeme6">
        <img src="https://github.githubassets.com/images/modules/settings/color_modes/light_colorblind_preview.svg" alt="" />
            <div> <span onClick={handletheme6}>{toggle6?<AiFillCheckCircle/>:<BiRadioCircle />}</span> <h3>Light Colorblind</h3></div>

        </div>
        </div>
    )
}

export default Theme
