export const noticeDayFormat = function(val) {
    if(val) {
        let d = parseInt(val.substring(val.lastIndexOf("-") + 1));
        return d < 10 ? '0' + d : d;
    }
};

export const noticeMonthFormat = function(val) {
    if(val) {
        let date = new Date(val);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        return y + '-' + ((m +1) < 10 ? '0' + m : m);
    }
};

export const paramsDateFormat = function(val) {
    if(val) {
        let date = new Date(val);
        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDay();
        return y + '-' + ((m + 1) < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
    }
};

export const dataMaxFormat = function (list) {
    let max = parseFloat(list[0]);
    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = parseFloat(list[i]);
        }
    }
    return parseFloat(Math.ceil(max));
    // if ((Math.ceil(max) + '').length === 1) {
    //     return 10;
    // } else if ((Math.ceil(max) + '').length === 2) {
    //     return 100;
    // } else if ((Math.ceil(max) + '').length === 3) {
    //     return 1000;
    // } else if ((Math.ceil(max) + '').length === 4) {
    //     return 10000;
    // } else if ((Math.ceil(max) + '').length === 5) {
    //     return 100000;
    // } else {
    //     return parseFloat(Math.ceil(max));
    // }
};

export const paramsListNameFormat = function(list) {
    if(list && list.length) {
        let strData = '';
        for (let i = 0; i < list.length; i++) {
            if(list[i].name) {
                strData += list[i].name + ',';
            }
        }
        if (strData.lastIndexOf(',') != -1) {
            return strData.substring(0, strData.lastIndexOf(","));
        } else {
            return strData;
        }
    }
};
export const paramsListNumFormat = function(list) {
    if(list && list.length) {
        let strData = '';
        for (let i = 0; i < list.length; i++) {
            if(list[i].num) {
                strData += list[i].num + ',';
            }
        }
        if (strData.lastIndexOf(',') != -1) {
            return strData.substring(0, strData.lastIndexOf(","));
        } else {
            return strData;
        }
    }
};
export const paramsListDateFormat = function(list) {
    if(list && list.length) {
        let strData = '';
        for (let i = 0;i < list.length;i++) {
            if(list[i].date) {
                strData += list[i].date + ',';
            }
        }
        if (strData.lastIndexOf(',') != -1) {
            return strData.substring(0, strData.lastIndexOf(","));
        } else {
            return strData;
        }
    }
};
export const paramsListTypeFormat = function(list) {
    if(list && list.length) {
        let strData = '';
        for (let i = 0; i < list.length; i++) {
            if(list[i].type) {
                strData += list[i].type + ',';
            }
        }
        if (strData.lastIndexOf(',') != -1) {
            return strData.substring(0, strData.lastIndexOf(","));
        } else {
            return strData;
        }
    }
};
export const paramsListCountFormat = function(list) {
    if (list && list.length) {
        let listCount = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i].name || list[i].num || list[i].date || list[i].type) {
                listCount++;
            }
        }
        return listCount;
    }
};
export const evaluateSoftwareStrFormat = function(nameStr, numStr, dateStr, dataNumber) {
    let nameArr = nameStr != null ? nameStr.split(",") : '';
    let numArr = numStr != null ? numStr.split(",") : '';
    let dateArr = dateStr != null ? dateStr.split(",") : '';
    let softwareData = [];
    for (let i = 0; i < dataNumber; i++) {
        softwareData.push({
            name: nameArr[i],
            num: numArr[i],
            date: dateArr[i]
        })
    }
    return softwareData;
};
export const evaluatePatentStrFormat = function(nameStr, typeStr, numStr, dataNumber) {
    let nameArr = nameStr != null ? nameStr.split(",") : '';
    let typeArr = typeStr != null ? typeStr.split(",") : '';
    let numArr = numStr != null ? numStr.split(",") : '';
    let patentData = [];
    for (let i = 0; i < dataNumber; i++) {
        patentData.push({
            name: nameArr[i],
            type: typeArr[i],
            num: numArr[i]
        })
    }
    return patentData;
};
export const evaluateFinancialStrFormat = function(nameStr, numStr, dataNumber) {
    let nameArr = nameStr != null ? nameStr.split(",") : '';
    let numArr = numStr != null ? numStr.split(",") : '';
    let patentData = [];
    for (let i = 0; i < dataNumber; i++) {
        patentData.push({
            name: nameArr[i],
            num: numArr[i]
        })
    }
    return patentData;
};
import CryptoJS from 'crypto-js'
export const encrypt = function(word){
    var key = CryptoJS.enc.Utf8.parse("88YQZH139892TNWM");
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
};
export const decrypt = function(word, keyStr){
    keyStr = keyStr ? keyStr : '88YQZH139892TNWM';
    var key  = CryptoJS.enc.Utf8.parse(keyStr);//Latin1 w8m31+Yy/Nw6thPsMpO5fg==
    var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
//将千分符格式的金额数字转化成普通格式的数字
export const delcommafy = function (num){
	num = num.toString();
	num = num.replace(/,/gi, '');
	return num;
}
//千分符转化
export const comdify = function (n) {
	let re = /\d{1,3}(?=(\d{3})+$)/g;
	let n1 = n.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
		return s1.replace(re, "$&,") + s2;
	});
	return n1;
}
