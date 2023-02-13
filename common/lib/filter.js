/* 
 *过滤脱敏信息
 */

// 名字脱敏
export function nameVague(str) {
	if (str == null || str == undefined || str.length == 0) {
		return ''
	}
	if (str.length == 1) {
		return str
	}
	if (str.length == 2) {
		return str.substring(0, 1) + '*' //截取name 字符串截取第一个字符，
	}
	let starStr = ''
	for (let index = 0; index < str.length - 2; index++) {
		starStr += "*"
	}
	return str.substring(0, 1) + starStr + str.substring(str.length - 1, str.length)
}
// 手机号脱敏
export function phoneVague(val) {
	if (val == null || val == undefined || val.length == 0) {
		return ''
	}
	return val.replace(/^(.{3})(?:\w+)(.{3})$/, "\$1*****\$2");
}
// 身份证脱敏
export function idCardVague(val) {
	if (val == null || val == undefined || val.length == 0) {
		return ''
	}
	return val.replace(/^(.{6})(?:\w+)(.{4})$/, "\$1********\$2");
}
//银行卡脱敏
export function bankVague(val) {
	if (val == null || val == undefined || val.length == 0) {
		return ''
	}
	return val.substr(0, 4) + "******" + val.substr(val.length - 4);
}
