/**
 * 格式化date数据
 * @example
 * ```js
 * // timestamp 1511971200
 * import {time2date} from 'zrutil'
 * time2date('1511971200') => '2017年11月30日'
 * ```
 */
export function time2date (timestamp){
    const time=new Date(parseInt(timestamp)*1000);
    return time.getFullYear()+"年"+(time.getMonth()+1)+"月"+time.getDate()+"日";
}
