import React from 'react'

const Theme = () => {
    const handleTheme1 = () =>{
        let element=document.body;
        element.classList.toggle("theme1")
        if(element.classList.contains("theme2") 
        ){
            element.classList.remove("theme2")
        }
        if(element.classList.contains("theme3")){
            element.classList.remove("theme3")
        }
        if(element.classList.contains("theme4")){
            element.classList.remove("theme4")
        }

    }
    const handleTheme2 = ()=>{
        let element=document.body;
        element.classList.toggle("theme2")
        if(element.classList.contains("theme1")){
            element.classList.remove("theme1")
        }
        if(element.classList.contains("theme3")){
            element.classList.remove("theme3")
        }
        if(element.classList.contains("theme4")){
            element.classList.remove("theme4")
        }


    }
    const handleTheme3 = () =>{
        let element=document.body;
        element.classList.toggle("theme3")
        if(element.classList.contains("theme1")){
            element.classList.remove("theme1")
        }
        if(element.classList.contains("theme2") 
        ){
            element.classList.remove("theme2")
        }
        if(element.classList.contains("theme4")){
            element.classList.remove("theme4")
        }

    }
    const handleTheme4 = () =>{
        let element=document.body;
        element.classList.toggle("theme4")
        if(element.classList.contains("theme1")){
            element.classList.remove("theme1")
        }
        if(element.classList.contains("theme2") 
        ){
            element.classList.remove("theme2")
        }
        if(element.classList.contains("theme3")){
            element.classList.remove("theme3")
        }

    }
    return (
        <div className="theme">
        <ul>
            <li onClick={()=>{
                handleTheme1()

            }} className="theme1">Theme1</li>
            <li onClick={()=>{handleTheme2() 
            }} className="theme2">Theme2</li>
            <li onClick={()=>{handleTheme3()
            }} className="theme3">Theme3</li>
            <li onClick={()=>{handleTheme4()
            }} className="theme4">Theme4</li>
        </ul>
            
        </div>
    )
}

export default Theme
