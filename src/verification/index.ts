const verification = {
  /**
   * 判断是否是验证码
   * @param {number|string} -code
   * @returns {boolean}
   * @example
   * isCode(123123) // true
   * @example
   * isCode(3123) // false
   */
  isCode(code: number | string): boolean {
    return /^[0-9]{6}$/g.test(code + "");
  },
  /**
   * 判断是否为邮箱
   * @param {string} - email
   * @returns {boolean}
   * @example
   * isEmail("aaa@qq.com") // true
   * @example
   * isEmail("aaqq.com") // false
   */
  isEmail(email: string): boolean {
    return /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?$/.test(
      email
    );
  },
  /**
   * 判断是否为手机号码
   * @param {number | string} - phone
   * @returns {boolean}
   * @example
   * isPhone(13311112222) // true
   * @example
   * isPhone(2) // false
   */
  isPhone(phone: number | string): boolean {
    return /(((\+?86)|(\+?860))?[1][34578][0-9]{9})/.test(phone + "");
  }
};

export default verification;
export const isCode = verification.isCode;
export const isEmail = verification.isEmail;
export const isPhone = verification.isPhone;
