/**
 * 判断是否是验证码
 * @example
 * ```js
 * import {isCode} from 'zrutil'
 * isEmail('123456') => true
 * ```
 */
export function isCode (code) {
  return  /^[0-9]{6}$/g.test(code);
}
