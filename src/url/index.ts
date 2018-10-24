const url = {
  /**
   * 获取url参数
   * @param {string} - name
   * @param {string} - url
   * @returns {string}
   * @example
   * getParamByName("a", "http://www.baidu.com?a=1&b=aaa") // "1"
   * @example
   * getParamByName("b", "http://www.baidu.com?a=1&b=aaa") // "aaa"
   * @example
   * getParamByName("c", "http://www.baidu.com?a=1&b=aaa") //""
   * @example
   * getParamByName("c") // "ccc"
   */
  getParamByName(name: string, url: string = window.location.href): string {
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex: RegExp = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results: Array<string> = regex.exec(url);
    if (!results) return "";
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  /**
   * 解析url
   * @param {string} - url
   * @returns {Object}
   * @example
   * parseQueryString("http://www.baidu.com?a=1&b=aaa") // {a:'1',b:'aaa'}
   */
  parseQueryString(url?: string): Object {
    if (!url) url = window.location.href;
    var search: string =
      url[0] === "?" ? url.substr(1) : url.substring(url.lastIndexOf("?") + 1);
    var theRequest: Object = new Object();
    if (search !== "") {
      var strs: Array<string> = search.split("&");
      for (var i: number = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = decodeURIComponent(
          strs[i].split("=")[1]
        );
      }
    }
    return theRequest;
  }
};

export default url;
export const getParamByName = url.getParamByName;
export const parseQueryString = url.parseQueryString;
