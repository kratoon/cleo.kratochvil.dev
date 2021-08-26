import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import cleo from './assets/cleo.png';
import czFlag from './assets/cz.png';
import usFlag from './assets/us.png';
import igIcon from './assets/igIcon.svg';
import label, { setLabelsLang, Lang } from "./labels";

const defaultLang: Lang = navigator.language && navigator.language.includes('cs') ? 'cs' : 'en';
setLabelsLang(defaultLang);

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
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

  function igIconClick() {
    window.location.href = 'https://www.instagram.com/kratochvil.ondrej/';
  }

  return (<div className="App">
    <header className="App-header">
      <div>
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
          <div className={"social"}>
            <div className={"ig"} onClick={igIconClick}>
              <img width={"40px"} height={"40px"} src={igIcon} alt={"instagram"} title={"instagram"}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>);
}

function NoMatch() {
  return (
    <Route
      render={({ location }) => (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />)}
    />
  );
}

export default App;
