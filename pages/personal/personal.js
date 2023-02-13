//订单状态列表
let orderStatusList = [{ 
	name: '待接诊',
	icon: '/static/personalCenter/icon2.png',
	url:'/pages/publicPage/reception/reception?title=待接诊'
}, {
	name: '进行中',
	icon: '/static/personalCenter/icon3.png',
	url:'/pages/publicPage/reception/reception?title=进行中'
}, {
	name: '待评价',
	icon: '/static/personalCenter/icon4.png',
	url:'/pages/publicPage/reception/reception?title=待评价'
}, {
	name: '已完成',
	icon: '/static/personalCenter/icon5.png',
	url:'/pages/publicPage/reception/reception?title=已完成'
}];
//我的医生，就诊点击面板
let smallList = [{
	name: '我的医生',
	icon: '/static/personalCenter/icon6.png',
	url:'/pages/personal/consultDoctor/consultDoctor'
}, {
	name: '就诊记录',
	icon: '/static/personalCenter/icon7.png',
	url:'/pages/personal/histoyPrescription/histoyPrescription'
}];
//功能页
let chooseList1 = [{
	name: '我的订单管理',
	icon: '/static/personalCenter/icon8.png',
	url:'/pages/personal/orderList/orderList'
}, {
	name: '发票管理',
	icon: '/static/personalCenter/icon9.png',
	url:'/pages/personal/billList/billList'
}, {
	name: '缴费记录',
	icon: '/static/personalCenter/icon10.png',
	url:'/pages/personal/payRecordList/payRecordList'
},{
	name: '问题反馈',
	icon: '/static/personalCenter/icon11.png',
	url:'/pages/personal/feedback/feedback'
}, {
	name: '地址管理',
	icon: '/static/personalCenter/icon12.png',
	url:'/pages/personal/addressList/addressList'
}];
//关于面板
let chooseList2 = [{
	name: '关于我们',
	icon: '/static/personalCenter/icon13.png',
	url:'/pages/personal/aboutus/aboutus',
}, {
	name: '联系我们',
	icon: '/static/personalCenter/icon14.png',
	url:'/pages/personal/aboutus/aboutus?title=联系我们',
}];

export{
	orderStatusList,
	smallList,
	chooseList1,
	chooseList2
}