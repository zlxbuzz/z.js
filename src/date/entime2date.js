/**
 * 格式化date数据
 * @example
 * ```js
 * // timestamp 1511971200
 * import {time2date} from 'zrutil'
 * time2date('1511971200') => '2017-11-30'
 * ```
 */
export function entime2date (timestamp){
    const time=new Date(parseInt(timestamp)*1000);
    return time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate();
}
