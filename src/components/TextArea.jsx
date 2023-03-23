import { React, useState } from "react";


function TextArea(props) {


    const [textValue, setTextValue] = useState();

    function handleSetText(e) {
        const target = e.target;

        setTextValue(target.value);

    }

    function handleSubmit(e) {
        e.preventDefault();

        const textArea = document.querySelector('.text');


        if (props.Input) {
            let idTranslate = '';
            if (props.Input === 'yoda') {
                idTranslate = 'yoda'
            }
            if (props.Input === 'minion') {
                idTranslate = 'minion'
            }
            if (props.Input === 'pirate') {
                idTranslate = 'pirate'
            }

            fetch(`https://api.funtranslations.com/translate/yoda.json`, { method: 'POST', text: textValue }).then(data => {
                let objRequest = JSON.parse(data)
                textArea.value = objRequest.data.contents.translated
            }).catch(err => {
                console.log(err)
            })





        }
    }


    return (
        <>
            <form>
                <textarea className="text" rows='25' cols='75' placeholder="Your text here..." onChange={handleSetText}></textarea>
                <button type="submit" onClick={handleSubmit}>Translate</button>
            </form>
        </>
    )
}



export default TextArea;    