import url from './url/index'
import device from './device/index'
import date from './date/index'
import baseSvc from './ajax/index'

//todo math运算

export default {
  baseSvc,
  ...date,
  ...device,
  ...url
}

