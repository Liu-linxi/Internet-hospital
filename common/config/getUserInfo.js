import store from "@/store/index.js" //引入存储vuex

var token = store.state.user.token;
if (token == null || token == '') {
	if (window.location.href.indexOf("?1=1") > 0) {
		store.commit('login', window.location.href)
		token = store.state.user.token;
	}
	if (token == null || token == '') {
		var url =
			'http://pds-online-serv.forhis.com/wechat/authorize?returnUrl=' +
			encodeURIComponent(
				`${location.href}?1=1`
			)
		window.location.replace(url)
	}
}
