/**
 * 获取url上的参数.
 * @param {String} - 参数名称
 * @param {String} - url 默认为当前url
 * @returns {value}
 * @example
 * webNotification.showNotification('Example Notification', {
 *    body: 'Notification Text...',
 *    icon: 'my-icon.ico'
 * }, function onShow(error, hide) {
 *    if (error) {
 *        window.alert('Unable to show notification: ' + error.message);
 *    } else {
 *        setTimeout(function hideNotification() {
 *            hide();
 *        }, 5000);
 *    }
 * });
 */
function parseQueryString(url) {
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

export default parseQueryString
