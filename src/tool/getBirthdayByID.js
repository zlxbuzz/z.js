/**
 * 获取url参数
 * @example
 * ```js
 * // idNo '610321198804163373'
 * import {getBirthdayByID} from 'zrutil'
 * getBirthdayByID('610321198804163373') => '1988-04-16'
 * ```
 */
export function getBirthdayByID(idNo){
    var birthday;
    idNo = idNo.trim();
    if (idNo.length !== 15 && idNo.length !== 18) {
        return '';
    }

    if (idNo.length === 15) {
        birthday = idNo.substring(6, 12);
        birthday = "19" + birthday;
        birthday = birthday.substring(0, 4) + "-" + birthday.substring(4, 6) + "-" + birthday.substring(6);
    } else {
        birthday = idNo.substring(6, 14);
        birthday = birthday.substring(0, 4) + "-" + birthday.substring(4, 6) + "-" + birthday.substring(6);
    }
    if( birthday.split('-')[1] > 12){
        return '';
    }
    return birthday;
}
