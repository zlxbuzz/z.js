// https://github.com/ustbhuangyi/picker/blob/master/src/util/dom.js
/**
 * @example
 * ```js
 * import {hasClass} from 'zrutil'
 * hasClass(el,'active') => true
 * ```
 */
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(el.className);
};

/**
 * @example
 * ```js
 * import {addClass} from 'zrutil'
 * addClass(el,'active')
 * ```
 */
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return;
  }

  let newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
};

/**
 * @example
 * ```js
 * import {removeClass} from 'zrutil'
 * removeClass(el,'active')
 * ```
 */
export function removeClass(el, className) {
  if (!hasClass(el, className)) {
    return;
  }

  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
  el.className = el.className.replace(reg, ' ');
};
