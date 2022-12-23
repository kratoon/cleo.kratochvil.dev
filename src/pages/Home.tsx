import React, { useEffect, useState } from 'react';
import cleo1 from '../assets/cleo1.png';
import cleo2 from '../assets/cleo2.png';
import cleo3 from '../assets/cleo3.png';
import cleo4 from '../assets/cleo4.png';
import czFlag from '../assets/cz.png';
import usFlag from '../assets/us.png';
import igIcon from '../assets/igIcon.svg';
import label, { setLabelsLang, Lang } from "../labels";

const cleoImages = [
  cleo1,
  cleo2,
  cleo3,
  cleo4
]

const defaultLang: Lang = navigator.language && navigator.language.includes('cs') ? 'cs' : 'en';
setLabelsLang(defaultLang);

function Home() {
  const [lang, setLang] = useState<Lang>(defaultLang);
  const [cleoImgIdx, setCleoImgIdx] = useState<number>(0);
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newIdx = (cleoImgIdx + 1) % cleoImages.length;
  //     console.log({newIdx});
  //     setCleoImgIdx(newIdx);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [cleoImgIdx]);

  return (
    <div>
      <div className={"lang"}>
        <img src={flagImg} onClick={changeLang} alt={newLang} title={newLang}/>
      </div>
      <div className={"cleo"}>
        <img src={cleoImages[cleoImgIdx]} title="Cleo" alt="cleo"/>
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
    </div>);
}

export default Home;
