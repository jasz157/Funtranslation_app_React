import {React , useState} from "react";


function TextArea (props) {


   const [textValue, setTextValue] = useState();

    function handleSetText(e) {
        const target = e.target;

        setTextValue(target.value);
    }

    props = {...props, setText:textValue};

    console.log(props);

    

    return (
        <>
            <textarea rows='25' cols='75' placeholder="Your text here..." onChange={handleSetText}></textarea>
        </>
    )
}



export default TextArea;    