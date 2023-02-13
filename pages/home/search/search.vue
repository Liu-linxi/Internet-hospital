<template>
	<view>
		<!-- 历史记录 -->
		<view class="his" v-if="historyShow">
			<view class="hisTitle">
				<view> 搜索历史</view>
				<view @click="empty">
					<uni-icons type="trash" size="24"></uni-icons>
				</view>
			</view>
			<view class="hisItem">
				<view class="history" v-for="(it,ind) in searchHistoryList" :key="ind" @click="searchShow(it)">{{it}}</view>
				<view v-if="searchHistoryList.length==0">暂无历史记录</view>
			</view>
		</view>
		<!-- 列表 -->
		
		<view class="list_panl" v-if="!historyShow">
			<view class="flex" v-for="(li,index) in list" :key="index" @click="openDocInfo(li)">
				<view class="f-left">
					<!-- {{li.type}} -->
					<image :src="li.image" mode=""></image>
				</view>
				<view class="f-right">
					<view class="f-top">
						{{li.value}}
					</view>
					<view class="f-btm">
						<!-- 测试 -->
					</view>
				</view>
			</view>
			<view v-if="list.length==0">暂无数据</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchVal:"",//搜索值
				list: [],
				searchHistoryList: [], //历史记录
				historyShow: true,
			};
		},
		onLoad() {
			this.getSearRecord(); //历史记录加载
		},
		// 右侧搜索按钮事件
		onNavigationBarButtonTap(e){
			this.search();
		},
		methods:{
			searchShow(val){
				this.searchVal=val;
				// #ifdef H5
				let inputSearch=document.querySelector(".uni-input-input[type=search]");
				var evt = new InputEvent("input", {
					inputType: "insertText",
					data: val,
					dataTransfer: null,
					isComposing: false
				});
				if(inputSearch){
					inputSearch.value = val;
					inputSearch.dispatchEvent(evt);
				}
				// #endif
				this.search();
			},
			// 搜索点击事件
			search(){
				if(!this.searchVal){
					uni.showToast({
						title:"请输入搜索关键字"
					})
					this.getSearRecord()
					this.historyShow=true;
					return;
				}
				uni.showToast({
					title:"测试搜索"+this.searchVal
				})
				this.historyShow=false;
				// 重新搜索执行操作末
				if (!this.searchHistoryList.includes(this.searchVal)) {
					// 新历史记录处理操作
					this.searchHistoryList.unshift(this.searchVal);
					uni.setStorageSync('searchList', JSON.stringify(this.searchHistoryList))
				} else {
					//有搜索记录，删除之前的旧记录，将新搜索值重新push到数组首位
					let i = this.searchHistoryList.indexOf(this.searchVal);
					this.searchHistoryList.splice(i, 1);
					this.searchHistoryList.unshift(this.searchVal);
					uni.setStorageSync('searchList', JSON.stringify(this.searchHistoryList))
				}
			},
			// 输入搜索并发
			onInput(){
				if(!this.searchVal){
					uni.showToast({
						title:"请输入搜索关键字"
					})
					this.getSearRecord()
					this.historyShow=true;
					return;
				}
				uni.showToast({
					title:"测试搜索"+this.searchVal
				})
				this.historyShow=false;
			},
			
			
			//获取历史记录
			getSearRecord() {
				let list = uni.getStorageSync("searchList")
				if (!list) return;
				list = JSON.parse(list)
				if (list.length <= 0) {
					return;
				}
				if (list.length >= 10) {
					this.searchHistoryList = list.slice(0, 10);
					uni.setStorageSync('searchList', JSON.stringify(this.searchHistoryList))
				} else {
					this.searchHistoryList = list;
				}
			},
			//清空历史记录
			empty() {
				uni.showToast({
					title:"清空"
				})
				uni.removeStorageSync("searchList")
				this.searchHistoryList = [];
			},
		},
		// 监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputChanged(e){
			this.searchVal=e.text;
			this.onInput();
		},
		// 点击软键盘上的“搜索”按钮时触发
		onNavigationBarSearchInputConfirmed	(e){
			this.search();
		},
	}
</script>

<style lang="less" scoped>
	.search {
		display: flex;
		align-items: center;
	}

	.hisTitle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding:0rpx 30rpx;
	}

	.hisItem {
		display: flex;
		align-items: center;
		margin: 0 30rpx;
		flex-wrap: wrap;

		.history {
			margin: 10rpx;
			background: #EBECF0;
			border-radius: 15rpx;
			padding: 2.5rpx 7rpx;
			line-height: 1.2;
		}
	}

	.list_panl {
		.flex {
			display: flex;
			align-items: center;
			margin: 20rpx 30rpx;
			.f-left {
				// border-radius: 10px; 
				// padding: 5px 8px;
				// background-color: #427cfc;
				// color: 	#FFFFFF;
				// font-size: 28px;
				line-height: 1.5;
				display: flex;
				align-items: center;

				image {
					background-color: #427cfc;
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
				}
			}

			.f-right {
				margin-left: 15rpx;

				.f-top {
					line-height: 1.5;
				}

				.f-btm {
					line-height: 1.5;
					font-size: 14rpx;
					color: #cccccc;
				}
			}
		}
	}

	::v-deep .van-search__content {
		border-radius: 10rpx;
	}
</style>
