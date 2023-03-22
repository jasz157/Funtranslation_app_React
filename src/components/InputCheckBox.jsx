import React, { useState } from "react";


function InputCheckBox(props) {

    const lang = ['yoda', 'pirate', 'minion'];

    console.log(props);

     const [Input , setInput] = useState("");
     console.log(Input)

    
    function handleSetInput(e) {
        const target = e.target
        
        if (target.checked) {
            setInput(e.target.name)
            props = {...props, checkBox:Input};
        }
    }




    return (
        <div style={{display:'flex', flexDirection:'row'}}>{lang.map((language , i) =>
            <section key={i} >
                <label  htmlFor={language}>{language}</label>
                <input name={language} type='checkbox' style={{marginRight:'10px'}} onChange={handleSetInput}/>
            </section>

        )}

        </div>
    )

}


export default InputCheckBox;


