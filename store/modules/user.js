import{ getQueryString } from "@/common/lib/utils.js"

export default {
	state:{
		// 登录状态
		loginStatus:false,
		// token
		token:null,
		// 用户信息
		userInfo:{},
		patInfo:{}
	},
	mutations:{
		// 初始化登录状态
		initUser(state){
			let userInfo = uni.getStorageSync('userInfo')
			if (userInfo) {
				userInfo = JSON.parse(userInfo)
				state.userInfo = userInfo
				state.token = userInfo.token
				state.loginStatus = true
			}
		},
		// 登录
		login(state,userinfo){
			if(userinfo.indexOf("?")>0){
				let users={
					token:getQueryString(userinfo.split('?')[1],'openid'),
					nickName:decodeURIComponent(getQueryString(userinfo.split('?')[1],'nickName')),
					headImgUrl:decodeURIComponent(getQueryString(userinfo.split('?')[1],'headImgUrl'))
				}
				state.userInfo = users
				state.loginStatus = true
				state.token = users.token
				// 持久化存储
				uni.setStorageSync('userInfo',JSON.stringify(users))
			}else{
				state.userInfo = userinfo
				state.loginStatus = true
				state.token = userinfo
				// 持久化存储
				uni.setStorageSync('userInfo',JSON.stringify(userinfo))
			}
		},
		// 退出登录
		logout(state){
			state.userInfo = {}
			state.loginStatus = false
			state.token = null
			uni.removeStorageSync('userInfo')
		}
	}
}