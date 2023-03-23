import React, { useState } from "react";
import TextArea from "./TextArea";



function InputCheckBox() {

    const lang = ['yoda', 'pirate', 'minion', 'mandalorian'];

    const [Input, setInput] = useState("");



    function handleSetInput(e) {
        const target = e.target

        if (target.checked) {
            setInput(target.name);

        }


    }




    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {lang.map((language, i) =>
                    <section key={i} >
                        <label htmlFor={language}>{language}</label>
                        <input name={language} type='checkbox' style={{ marginRight: '10px' }} onChange={handleSetInput} />
                    </section>

                )}



            </div>
            <TextArea Input={Input} />
        </>
    )

}


export default InputCheckBox;


