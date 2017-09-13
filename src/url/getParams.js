/**
 * 获取url上的参数.
 * @param {String} - 参数名称
 * @param {String} - url 默认为当前url
 * @returns {a}
 */
function getParamByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default getParamByName
