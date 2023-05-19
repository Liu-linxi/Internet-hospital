const array1 = [{
		title: '糖尿病患病时长:',
		choose: 0,
		chooseArray:[{text: '1-5年',value: 0}, {text: '5-10年',value: 1},{text: '10-15年',value: 2}, {text: '无',value: 3}],
	},
	{
		title: '糖尿病治疗情况:',
		choose: 0,
		chooseArray:[{text: '饮食',value: 0}, {text: '运动',value: 1},{text: '口服药物',value: 2}, {text: '胰岛素',value: 3}],
	},
	{
		title: '血糖控制情况:',
		choose: 0,
		chooseArray:[{text: '正常',value: 0}, {text: '稍高',value: 1},{text: '偏高',value: 2}],
	}
]

const witherArr=[{text: '是',value: 1}, {text: '否',value: 0}];
const array2 = [{
		title: '病史情况:',
		chooseArray: [
			{
				title: '是否有高血压:',
				choose: 0,
				chooseArray: witherArr
			},
			{
				title: '是否有冠心病:',
				choose: 0,
				chooseArray: witherArr
			},
			{
				title: '是否有血脂异常:',
				choose: 0,
				chooseArray: witherArr
			},
			{
				title: '是否有心血管疾病:',
				choose: 0,
				chooseArray: witherArr
			},
			{
				title: '是否有脑血管疾病:',
				choose: 0,
				chooseArray: witherArr
			},
		]
	},
	{
		title: '足部病史:',
		chooseArray: [
			{
				title: '是否足部检查:',
				choose: 0,
				chooseArray: witherArr
			},
			{
				title: '是否有足部溃疡:',
				choose: 0,
				chooseArray: witherArr
			},
			{
				title: '是否有跋行:',
				choose: 0,
				chooseArray: witherArr
			}
		]
	},
	{
		title: '下肢皮肤颜色:',
		chooseArray: [
			{
				title: '左腿:',
				choose: 0,
				chooseArray: [{text: '正常',value: 0}, {text: '苍白',value: 1},{text: '暗紫',value: 2}]
			},
			{
				title: '右腿:',
				choose: 0,
				chooseArray: [{text: '正常',value: 0}, {text: '苍白',value: 1},{text: '暗紫',value: 2}]
			},
		]
	},
	{
		title: '下肢皮肤温度:',
		chooseArray: [
			{
				title: '左腿:',
				choose: 0,
				chooseArray: [{text: '正常',value: 0}, {text: '发凉',value: 1},{text: '升高',value: 2}]
			},
			{
				title: '右腿:',
				choose: 0,
				chooseArray: [{text: '正常',value: 0}, {text: '发凉',value: 1},{text: '升高',value: 2}]
			},
		]
	}
]

export {
	array1,
	array2
}