const labels: {
  [key: string]: {
    en: string;
    cs: string;
  }
} = {
  heyThere: {
    'en': 'Hey there, my name is Cleo!',
    'cs': 'Ahoj, jmenuji se Cleo!',
  },
  imGermanShepherd: {
    'en': "I'm a german shepherd living in Prague.",
    'cs': 'Jsem německý ovčák z Prahy.'
  },
  born: {
    'en': 'I was born on Jun 14, 2021.',
    'cs': 'Narodil jsem se 14. června 2021.'
  },
  lost: {
    'en': "In case I'm lost, contact my owner. He's ugly crying.",
    'cs': "Pokud jsem se ztratil, prosím, kontaktujte mého páníčka. Je strachy bez sebe."
  }
}

export type Lang = 'en' | 'cs';
export const langs: Lang[] = ['en', 'cs'];

export interface Label {
  _lang: Lang;
  [key: string]: string | undefined;
}

const labelTarget: Label = {
  _lang: 'en'
}

export function setLabelsLang(lang: Lang) {
  labelTarget._lang = lang;
}

const label: Label = new Proxy(labelTarget, {
  get(target: Label, name: string) {
    return labels[name] && labels[name][target._lang];
  }
});

export default label;