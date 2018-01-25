/**
 * 判断是否是手机号码
 * ### Example (es imports)
 * ```js
 * import {isPhone} from 'zrutil'
 * isPhone('13333333333') => true
 * ```
 */
export function isPhone (phone) {
  return /(((\+?86)|(\+?860))?[1][34578][0-9]{9})/.test(phone)
}
