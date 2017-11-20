const toS = Object.prototype.toString;
export default {
  each (obj,iterator,context) {
    if (typeof obj !== 'object') return;
    var i, l, t = this.is(obj);
    context = context || obj;
    if (t === 'array' || t === 'arguments' || t === 'nodelist') {
        for (i = 0, l = obj.length; i < l; i++) {
            if (iterator.call(context, obj[i], i, obj) === false) return;
        }
    } else {
        for (i in obj) {
            if (obj.hasOwnProperty(i)) {
                if (iterator.call(context, obj[i], i, obj) === false) return;
            }
        }
    }
  },
  is (val , type){
    return toS.call(val) === `[object ${type}]`
  },
  log (msg){
    console.log(msg);
  }
}
