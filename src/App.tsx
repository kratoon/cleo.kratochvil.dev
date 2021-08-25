import React, { useState } from 'react';
import cleo from './cleo.jpg';
import './App.css';
import label, { setLabelsLang, Lang } from "./labels";

function App() {
  const [lang, setLang] = useState<Lang>('en');
  const newLang: Lang = lang === 'en' ? 'cs' : 'en';
  const flagCode = ({
    'en': 'us',
    'cs': 'cz'
  })[newLang];
  const flagUrl = `https://www.countryflags.io/${flagCode}/flat/32.png`;

  function changeLang() {
    setLang(newLang);
    setLabelsLang(newLang);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className={"lang"}>
          <img src={flagUrl} onClick={changeLang} alt={newLang} title={newLang}/>
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
