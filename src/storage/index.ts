const prefix = 'store';
const storage = {
   /**
   * 设置storage
   * @param {string} - attr
   * @param {string|number} - val
   * @returns {void}
   * @example
   * set("token", "123") // undefined
   * @example
   * get("token") // "123"
   */
  set(attr: string, val: string): void {
    localStorage.setItem(prefix + attr, val);
  },
  /**
   * 获取storage
   * @param {string} - attr
   * @returns {string}
   * @example
   * get("token") // "123"
   */
  get(attr: string): string|null {
    return localStorage.getItem(prefix + attr);
  },
   /**
   * 移除storage
   * @param {string} - attr
   * @returns {void}
   * @example
   * remove("token") // undefined
   * @example
   * get("token") // null
   */
  remove(attr: string): void {
    localStorage.removeItem(prefix + attr);
  },
  /**
   * 移除所有storage
   * @returns {void}
   * @example
   * clear() // undefined
   * @example
   * get("token") // null
   */
  clear():void {
    localStorage.clear();
  }
}
export default storage;
export const set = storage.set;
export const get = storage.get;
export const remove = storage.remove;
export const clear = storage.clear;