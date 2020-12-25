import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const commentChance = Math.random()
  return {
    date: '2020-' + Math.floor(Math.random() * (1, 12)+1) + '-' + Math.floor(Math.random() * (1, 30)+1),
    t5RfidCc: Math.floor(Math.random() * 20),
    hylder: Math.floor(Math.random() * 20),
    forl: Math.floor(Math.random() * 20),
    rfidCc: Math.floor(Math.random() * 20),
    halfRfidCc: Math.floor(Math.random() * 20),
    halfHylde: Math.floor(Math.random() * 20),
    halfCc: Math.floor(Math.random() * 20),
    dsHalfCc: Math.floor(Math.random() * 20),
    dsHalfHylde: Math.floor(Math.random() * 20),
    eupl: Math.floor(Math.random() * 20),
    halfPll: Math.floor(Math.random() * 20),
    quartPll: Math.floor(Math.random() * 20),
    cc: Math.floor(Math.random() * 20),
    sojleror: Math.floor(Math.random() * 20),
    comment:
    commentChance > 0.66
      ? 'Afvist'
      : commentChance > 0.33
      ? 'Godkendt'
      : 'Afhentet',
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