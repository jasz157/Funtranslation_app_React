import { React, useState } from "react";
import axios from "axios";

function TextArea(props) {




    const [textValue, setTextValue] = useState();

    function handleSetText(e) {
        const target = e.target;

        setTextValue(target.value);

    }

    function handleSubmit(e) {
        e.preventDefault();

        const textArea = document.querySelector('.text');
        let idTranslate = '';


        switch (props.Input) {

            case 'yoda':
                idTranslate = 'yoda'
                break;

            case 'minion':
                idTranslate = 'minion'
                break;

            case 'pirate':
                idTranslate = 'pirate'
                break;

            case 'mandalorian':
                idTranslate = 'mandalorian'
                break;

            default:
                idTranslate = '';
                break;

        };

        axios.post(`/translate/${idTranslate}.json`, { text: textValue })
            .then(res => {
                let { translated } = res.data.contents;
                textArea.value = translated;
            }).catch(err => {
                console.log(err)
            })








    }



    return (
        <>
            <form>
                <textarea className="text" rows='25' cols='75' placeholder="Your text here..." onChange={handleSetText}></textarea>
                <button style={{ display: 'flex' }} type="submit" onClick={handleSubmit}>Translate</button>
            </form>
        </>
    )
}



export default TextArea;    