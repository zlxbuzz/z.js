/**
 * 判断是否是邮箱
 * @example
 * ```js
 * import {isEmail} from 'zrutil'
 * isEmail('xxx@qq.com') => true
 * ```
 */
export function isEmail (email) {
  return  /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?$/.test(email);
}
