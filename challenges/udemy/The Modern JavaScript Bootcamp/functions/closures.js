const createTipper = base => amount => base * amount
const tipper50 = createTipper(.5)
console.log(tipper50(100))