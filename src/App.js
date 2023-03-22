
import './App.css';
import InputCheckBox from './components/InputCheckBox';
import TextArea from './components/TextArea';


function App() {
        
  let props = {};

  return (
    <div className='flexContainer'>
      <h1>Funny Translations</h1>
      <InputCheckBox props={props}/>
      <TextArea props={props}/>
    </div>
  )
}

export default App;
