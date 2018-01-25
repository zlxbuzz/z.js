/**
 * 解析url参数
 * @example
 * ```js
 * // url www.baidu.com?c=aa
 * import {parseQueryString} from 'zrutil'
 * parseQueryString(url) => {c: 'aa'}
 * ```
 */
export function parseQueryString(url) {
  if (!url) url = window.location.href;
  var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1)
  var theRequest = new Object();
  if (search !== '') {
    var strs = search.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = decodeURIComponent((strs[i].split("=")[1]));
    }
  }
  return theRequest;
}
