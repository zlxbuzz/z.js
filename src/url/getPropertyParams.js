export default function (paramsArr = [], _defaults = {}) {
    const obj = Object.assign({}, _defaults);
    paramsArr.forEach(function(item) {
        if (getParamByName(item) !== null) {
            obj[item] = getParamByName(item);
        }
    });
    return obj;
}
