/* 
 *from表单验证规则
 */
import {
	checkPhone,
	checkIdCard
} from "@/common/lib/utils.js"
let rules = {
	name: {
		rules: [{
				required: true,
				errorMessage: '请输入姓名',
			},
			{
				minLength: 1,
				maxLength: 7,
				errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
			}
		]
	},
	relap: {
		rules: [{
			required: true,
			errorMessage: '请选择关系',
		}]
	},
	idCard: {
		rules: [{
				required: true,
				errorMessage: '请输入身份证号',
			},
			{
				format: 'idCard',
				validateFunction: function(rule, value, data, callback) {
					if (checkIdCard(value, 1) == "验证成功") {
						return true
					} else {
						callback(checkIdCard(value, 1))
					}
				}
			}
		]
	},
	identiNum: {
		rules: [{
			required: true,
			errorMessage: '请输入证件号码',
		}, ]
	},
	sex: {
		rules: [{
			required: true,
			errorMessage: '请选择性别',
		}]
	},
	birDate: {
		rules: [{
			required: true,
			errorMessage: '请选择出生日期',
		}]
	},
	nation: {
		rules: [{
			required: true,
			errorMessage: '请选择民族',
		}]
	},
	phone: {
		rules: [{
				required: true,
				errorMessage: '请输入手机号',
			},
			{
				format: 'phone',
				validateFunction: function(rule, value, data, callback) {
					if (!checkPhone(value)) {
						callback("手机号不正确")
					}
					return checkPhone(value)
				}
			}
		]
	},
	addressDetail:{
		rules: [{
			required: true,
			errorMessage: '请输入详细地址',
		}]
	},
	area:{
		rules: [{
			required: true,
			errorMessage: '请选择地区',
		}]
	},
	// 对email字段进行必填验证
	email: {
		rules: [{
			format: 'email',
			errorMessage: '请输入正确的邮箱地址',
		}]
	}
}
export {
	rules,
}
