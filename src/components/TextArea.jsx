import { React, useState } from "react";


function TextArea(props) {


    const [textValue, setTextValue] = useState();

    function handleSetText(e) {
        const target = e.target;

        setTextValue(target.value);

    }

    function handleSubmit (e) {
       e.preventDefault();

       const textArea = e.target;

       if (props.checkBox) {
        let idTranslate = '';
        if (props.checkBox === 'yoda') {
            idTranslate = 'yoda'
        }
        if (props.checkBox === 'minion') {
            idTranslate = 'minion'
        }
        if (props.checkBox === 'pirate') {
            idTranslate = 'pirate'
        }
        let request = async () => {
            await fetch(`https://api.funtranslations.com/translate/${idTranslate}`, {
                method: 'POST',
                Name: 'text',
                Type: 'string',
                Description: textValue
            })
        }

        if (request) {
            let objRequest = request.JSON.parse(request);
            textArea.value = objRequest.translated;
        }
    }
    }



    console.log(props);



    return (
        <>
            <form>
                <textarea rows='25' cols='75' placeholder="Your text here..." onChange={handleSetText} onSubmit={handleSubmit(e)}></textarea>
                <button type="submit">Translate</button>
            </form>
        </>
    )
}



export default TextArea;    