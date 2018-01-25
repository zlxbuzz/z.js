/**
 * 判断是否是手机号码
 * @example
 * ```js
 * import {isPhone} from 'zrutil'
 * isPhone('13333333333') => true
 * ```
 */
export function isPhone (phone) {
  return /(((\+?86)|(\+?860))?[1][34578][0-9]{9})/.test(phone)
}
