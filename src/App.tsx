import React, { useState } from 'react';
import cleo from './cleo.png';
import czFlag from './cz.png';
import usFlag from './us.png';
import './App.css';
import label, { setLabelsLang, Lang } from "./labels";

const defaultLang: Lang = navigator.language && navigator.language.includes('cs') ? 'cs' : 'en';
setLabelsLang(defaultLang);

function App() {
  const [lang, setLang] = useState<Lang>(defaultLang);
  const newLang: Lang = lang === 'en' ? 'cs' : 'en';
  const flagImg = ({
    'en': usFlag,
    'cs': czFlag
  })[newLang];
  function changeLang() {
    setLang(newLang);
    setLabelsLang(newLang);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className={"lang"}>
          <img src={flagImg} onClick={changeLang} alt={newLang} title={newLang}/>
        </div>
        <div className={"cleo"}>
          <img src={cleo} title="Cleo" alt="cleo"/>
        </div>
        <div>
          <h1>
            {label.heyThere}
          </h1>
          <div>
            {label.imGermanShepherd}
          </div>
          <div>
            {label.born}
          </div>
          <h4>
            {label.lost}
          </h4>
          <div className={"phone"}>
            <a href="tel:+420 776 036 747">+420 776 036 747</a>
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
