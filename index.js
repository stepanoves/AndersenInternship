Array.prototype.duplicator = function()  {
    return [...this, ...this]
}
function mul(value) {
    let result = value;
    return function(value) {
        if (value !== undefined) {
            result *= value;
            return mul(result);
        }

        return result;
    }
    
}

function intersection(arr1, arr2) {
    let setArr = new Set(arr1);
    let intersections = [];
    arr2.forEach(element => {
        if( setArr.has(element) ) intersections.push(element);
    });

    return intersections;
}

function strToObj(str) {
    const props = str.split('.');
    let lastEl = {};
    lastEl[props[props.length - 1]] = null;
    for (let i = props.length - 2; i >= 0; i--) {
        let newObj = {};
        newObj[props[i]] = lastEl;
        lastEl = newObj;
    }
    return lastEl;
}