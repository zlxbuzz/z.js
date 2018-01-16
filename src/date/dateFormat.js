import {is,zero} from '../utils/index'

function dateformat(d,format){
  if(!is(d,'Date')) d = new Date()

  const year   = d.getFullYear();
  const month  = zero(d.getMonth() + 1)
  const day    = zero(d.getDate())
  const hour   = zero(d.getHours())
  const minute = zero(d.getMinutes())
  const second = zero(d.getSeconds())
  if(format)
    return format.replace('yyyy',year).replace('mm',month).replace('dd',day)
  return `${year}-${month}-${day}`
}

export default dateformat
