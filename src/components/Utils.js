import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const dato = Math.floor(Math.random() * (1, 30)+1) + '-' + Math.floor(Math.random() * (1, 12)+1) + '-20' + Math.floor(Math.random() * (1, 11)+10);
  const checkbox = <input type="checkbox" />;
  const checkbox1 = <input type="checkbox" checked/>;
  const checkboxChecked = Math.random()

  
  return {
    id: Math.floor(Math.random() * 9999),
    accepAA: checkboxChecked > 0.5 ? checkbox : checkbox1,
    accepKunde: checkboxChecked > 0.5 ? checkbox : checkbox1,
    KvitteringNr: Math.floor(Math.random() * 999999),
    turNr: Math.floor(Math.random() * 99999),
    dato: dato,
    t5RFIDcc: Math.floor(Math.random() * 100),
    hylder: Math.floor(Math.random() * 100),
    forlaenger: Math.floor(Math.random() * 100),
    RFIDcc: Math.floor(Math.random() * 100),
    halvRFIDcc: Math.floor(Math.random() * 100),
    halvHylde: Math.floor(Math.random() * 100),
    halvCC: Math.floor(Math.random() * 100),
    dsHalvCC: Math.floor(Math.random() * 100),
    dsHalvHylde: Math.floor(Math.random() * 100),
    europalle: Math.floor(Math.random() * 100),
    halvPalle: Math.floor(Math.random() * 100),
    kvartPalle: Math.floor(Math.random() * 100),
    cc: Math.floor(Math.random() * 100),
    soejleroer: Math.floor(Math.random() * 100),
    signeret: checkboxChecked > 0.5 ? checkbox : checkbox1,
    kommentar: namor.generate({ words: 4, saltLength: 0, separator: " ", subset: "manly" }),
    pdf: <i class="fas fa-file-download"></i>,
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
