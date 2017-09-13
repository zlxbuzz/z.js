const toS = Object.prototype.toString;
export default {
  is (val , type){
    return toS.call(val) === `[object ${type}]`
  },
  log (msg){
    console.log(msg);
  }
}
