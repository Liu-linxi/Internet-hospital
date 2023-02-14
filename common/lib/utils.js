/* 
 *检测工具类
 */

/* 
 * 地址传参数截取
 * window.location.search得到?xxx=xxx&xxx=xxx
 * window.location.search.substr(1)得到xxx=xxx&xxx=xxx
 */
export function getQueryString(pramas, name) {
	// pramas=xxx=xxx&xxx=xxx
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	// var r = window.location.search.substr(1).match(reg);
	var r = pramas.match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}

//分转元
export function fenToYuan(fen) {
	if (fen !== null) {
		var num = fen
		num = fen * 0.01
		num += ''
		var reg =
			num.indexOf('.') > -1 ?
			/(\d{1,3})(?=(?:\d{3})+\.)/g :
			/(\d{1,3})(?=(?:\d{3})+$)/g
		num = num.replace(reg, '$1')
		num = toDecimal2(num)
		return num
	} else {
		return 0.0
	}
}
//元转分
export function yuanToFen(yuan) {
	var m = 0,
		s1 = yuan.toString();
	try {
		if (s1.indexOf(".") > 0) {
			m += s1.split('.')[1].length
		}
	} catch (e) {
		console.log(e)
	}
	return (Number(s1.replace('.', '')) * 100) / Math.pow(10, m)
}
// 小数
export function toDecimal2(x) {
	var f = parseFloat(x)
	if (isNaN(f)) {
		return false
	}
	f = Math.round(x * 100) / 100
	var s = f.toString()
	var rs = s.indexOf('.')
	if (rs < 0) {
		rs = s.length
		s += '.'
	}
	while (s.length <= rs + 2) {
		s += '0'
	}
	return s
}


// 手机号验证
export function checkPhone(val) {
	// return /^1[34578]\d{9}$/.test(val);
	return /^1[3456789]\d{9}$/.test(val);
}
const cityArray = {
	11: '北京',
	12: '天津',
	13: '河北',
	14: '山西',
	15: '内蒙古',
	21: '辽宁',
	22: '吉林',
	23: '黑龙江',
	31: '上海',
	32: '江苏',
	33: '浙江',
	34: '安徽',
	35: '福建',
	36: '江西',
	37: '山东',
	41: '河南',
	42: '湖北',
	43: '湖南',
	44: '广东',
	45: '广西',
	46: '海南',
	50: '重庆',
	51: '四川',
	52: '贵州',
	53: '云南',
	54: '西藏',
	61: '陕西',
	62: '甘肃',
	63: '青海',
	64: '宁夏',
	65: '新疆',
	71: '台湾',
	81: '香港',
	82: '澳门',
	91: '国外'
}
// 验证身份证号
export function checkIdCard(idCard, type) {
	// type 1验证身份证 2获取个人信息
	if (idCard.length == 15) {
		idCard = idCard.replace(/(\d{6})(\d{9})/, "$119$2x");
	}
	let iSum = 0
	if (!/^\d{17}(\d|x)$/i.test(idCard)) return "非法的身份证号";
	idCard = idCard.replace(/x$/i, "a");
	if (cityArray[parseInt(idCard.substr(0, 2))] == null) return "非法地区";
	const sBirthday = idCard.substr(6, 4) + "-" + Number(idCard.substr(10, 2)) + "-" + Number(idCard.substr(12, 2));
	const d = new Date(sBirthday.replace(/-/g, '/'))
	if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "非法生日";
	for (let i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(idCard.charAt(17 - i), 11)
	if (iSum % 11 != 1) return "非法证号";

	if (type == 1) {
		return "验证成功";
	} else {
		const detail = {
			province: '',
			birthday: '',
			age: '',
			sex: ''
		};
		detail.province = cityArray[parseInt(idCard.substr(0, 2))];
		detail.birthday = sBirthday;
		detail.sex = (idCard.substr(16, 1) % 2 ? "男" : "女");
		// 计算年龄
		const birthDayTime = new Date(sBirthday).getTime()
		const nowTime = new Date().getTime()
		detail.age = Math.ceil((nowTime - birthDayTime) / 31536000000) - 1;
		return detail;
	}
}
