const toS = Object.prototype.toString

export function is(val,type){
  return toS.call(val) === `[object ${type}]`
}

export function zero(val){
  return val>10 ? val : `0${val}`
}
