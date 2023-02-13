// 获取当前日期时间
export function timestampToTime(timestamp, pattern) {
	var date = new Date(timestamp);
	var Y = date.getFullYear();
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	var hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	var mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	var ss = date.getSeconds() < 10 ? '0' + date.getDate() : date.getSeconds();
	switch (pattern) {
		case '{y}-{m}-{d}':
			return `${Y}-${M}-${D}`;
			break;
		case '{y}/{m}/{d}':
			return `${Y}/${M}/${D}`;
			break;
		case '{h}:{m}:{s}':
			return `${hh}:${mm}:${ss}`;
			break;
		case '{y}-{m}-{d} {h}:{m}:{s}':
			return `${Y}-${M}-${D} ${hh}:${mm}:${ss}`;
			break;
		case '{y}/{m}/{d} {h}:{m}:{s}':
			return `${Y}/${M}/${D} ${hh}:${mm}:${ss}`;
			break;
		default:
			break;
	}
}


// 计算指定时间与当前的时间差
export function sumAge(data) {
	let dateBegin = new Date(data.replace(/-/g, "/"));
	let dateEnd = new Date(); //获取当前时间
	let dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
	let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
	let leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
	let hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
	//计算相差分钟数
	let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
	let minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
	//计算相差秒数
	let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
	let seconds = Math.round(leave3 / 1000)
	return dayDiff + "天 " + hours + "小时 ";
}
// 获取聊天时间（相差300s内的信息不会显示时间）
export function getChatTime(v1, v2) {
	v1 = v1.toString().length < 13 ? v1 * 1000 : v1;
	v2 = v2.toString().length < 13 ? v2 * 1000 : v2;
	if (((parseInt(v1) - parseInt(v2)) / 1000) > 300) {
		return gettime(v1);
	}
}
// 人性化时间格式
export function gettime(shorttime) {
	shorttime = shorttime.toString().length < 13 ? shorttime * 1000 : shorttime;
	let now = (new Date()).getTime();
	let cha = (now - parseInt(shorttime)) / 1000;

	if (cha < 43200) {
		// 当天
		return dateFormat(new Date(shorttime), "{A} {t}:{ii}");
	} else if (cha < 518400) {
		// 隔天 显示日期+时间
		return dateFormat(new Date(shorttime), "{Mon}月{DD}日 {A} {t}:{ii}");
	} else {
		// 隔年 显示完整日期+时间
		return dateFormat(new Date(shorttime), "{Y}-{MM}-{DD} {A} {t}:{ii}");
	}
}

export function parseNumber(num) {
	return num < 10 ? "0" + num : num;
}

export function dateFormat(date, formatStr) {
	let dateObj = {},
		rStr = /\{([^}]+)\}/,
		mons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

	dateObj["Y"] = date.getFullYear();
	dateObj["M"] = date.getMonth() + 1;
	dateObj["MM"] = parseNumber(dateObj["M"]);
	dateObj["Mon"] = mons[dateObj['M'] - 1];
	dateObj["D"] = date.getDate();
	dateObj["DD"] = parseNumber(dateObj["D"]);
	dateObj["h"] = date.getHours();
	dateObj["hh"] = parseNumber(dateObj["h"]);
	dateObj["t"] = dateObj["h"] > 12 ? dateObj["h"] - 12 : dateObj["h"];
	dateObj["tt"] = parseNumber(dateObj["t"]);
	dateObj["A"] = dateObj["h"] > 12 ? '下午' : '上午';
	dateObj["i"] = date.getMinutes();
	dateObj["ii"] = parseNumber(dateObj["i"]);
	dateObj["s"] = date.getSeconds();
	dateObj["ss"] = parseNumber(dateObj["s"]);

	while (rStr.test(formatStr)) {
		formatStr = formatStr.replace(rStr, dateObj[RegExp.$1]);
	}
	return formatStr;
}
