/**
 * 判断是否为ios系统
 * @example
 * ```js
 * import {iOS} from 'zrutil'
 * iOS() => true
 * ```
 */
export function iOS () { return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream }
/**
 * 判断是否为Android系统
 * @example
 * ```js
 * import {Android} from 'zrutil'
 * Android() => false
 * ```
 */
export function Android () { return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1}
/**
 * 判断是否为Weixin环境
 * @example
 * ```js
 * import {Weixin} from 'zrutil'
 * Weixin() => false
 * ```
 */
export function Weixin () { return navigator.userAgent.indexOf('MicroMessenger') > -1}
