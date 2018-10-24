const env = {
  /**
   * ios环境
   * @param {string} ua
   * @returns {boolean}
   * @example
   * iOS('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1') // true
   */
  iOS(ua: string = navigator.userAgent): boolean {
    return /iPad|iPhone|iPod/i.test(ua);
  },
  /**
   * weixin环境
   * @param {string} ua
   * @returns {boolean}
   */
  Weixin(ua: string = navigator.userAgent): boolean {
    return (
      /micromessenger\/([\d.]+)/i.test(ua) || ua.indexOf("MicroMessenger") > -1
    );
  },
  /**
   * android环境
   * @param {string} ua
   * @returns {boolean}
   * @example
   * Android('Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36') // true
   */
  Android(ua: string = navigator.userAgent): boolean {
    return /android/i.test(ua) || ua.indexOf("Adr") > 1;
  },
  /**
   * browser环境
   * @returns {boolean}
   */
  isBrowser(): boolean {
    return (
      typeof window === "object" &&
      typeof document === "object" &&
      document.nodeType === 9
    );
  },
  /**
   * webvie环境
   * @returns {boolean}
   */
  isMara(ua: string = navigator.userAgent): boolean {
    return ua.indexOf("mararun") > -1;
  },
  /**
   * 小程序环境
   * @returns {promise}
   */
  isMini(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.Weixin()) {
        wx.miniProgram.getEnv(res => {
          resolve(res.miniprogram);
        });
      } else {
        resolve(false);
      }
    });
  },
  /**
   * mobile环境
   * @param {string} ua
   * @returns {boolean}
   * @example
   * isMobile('Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)') // true
   */
  isMobile(ua: string = navigator.userAgent): boolean {
    var regMobileAll = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      regMobileFour = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;

    return regMobileAll.test(ua) || regMobileFour.test(ua.substr(0, 4));
  }
};

export default env;
export const iOS = env.iOS;
export const Weixin = env.Weixin;
export const Android = env.Android;
export const isBrowser = env.isBrowser;
export const isMobile = env.isMobile;
export const isMara = env.isMara;
export const isMini = env.isMini;
