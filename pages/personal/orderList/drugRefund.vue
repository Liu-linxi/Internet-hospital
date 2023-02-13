<template>
	<view style="padding-bottom: 120rpx;">
		<view class="mx-2 py-2">
			<view class="rounded-big" style="border: 1px solid #dee2e6;">
				<view class="d-flex a-center px-2 py-1 pt-2">
					<label class="radio d-flex a-center main--color j-center flex-shrink" @click="doSelectAll">
						<radio color="#427CFC" :checked="checkedAll" style="transform: scale(0.8);" />
						全选
						<text class="ml-3">
							选择退款内容
						</text>
					</label>

				</view>
				<view class="">
					<view v-for="(li,index) in druglist" :key="index" @click="selectItem(index)">
						<view class="px-2  d-flex a-center py-1">
							<label class="radio d-flex a-center j-center flex-shrink"
								style="width: 60upx;height: 60upx;">
								<radio color="#427CFC" :value="li.id" :checked="li.checked"
									style="transform: scale(0.8);" />
							</label>
							<view class="">
								<image src="/static/icon/emptyMedicine.png" class="rounded main-bg-color icon-big"
									mode=""></image>
							</view>
							<view class="ml-2 truncate w-100">
								<view class="truncate font-weight">
									香砂养胃丸
								</view>
								<view class="truncate text-subheading font line-h-lg">
									片剂 • 60粒
								</view>
								<view class="d-flex a-center j-sb">
									<view class="d-flex a-center">
										<image src="/static/icon/bag.png" class="icon-image-small" mode=""></image>
										<view class="ml-1">数量:{{li.num}}</view>
									</view>
									<view class="main--color font-weight mr-3">
										￥{{li.price}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="border mt-2 rounded-big px-3 py-2">
				<view class="d-flex a-center j-sb">
					<view>
						退款原因
						<text class="red-text">*</text>
					</view>
					<view class="d-flex a-center">
						<picker @change="bindPickerChange" :value="reasonIndex" :range="reasonColumns">
							<view :class="reason?'main--color':'text-subheading'">
								{{reason||"请选择退款原因"}}
							</view>
						</picker>
						<uni-icons type="forward" size="20" color="#427CFC"></uni-icons>
					</view>
				</view>
				<view class="d-flex a-center j-sb mt-3">
					<view>
						退款金额
						<text class="red-text">*</text>
					</view>
					<view class="main--color mr-2">
						￥{{totalPrice}}
					</view>
				</view>
			</view>
			<view class="border mt-2 rounded-big px-3 py-2 d-flex a-center j-sb">
				<view>
					退货方式
					<text class="red-text">*</text>
				</view>
				<view class="d-flex a-center">
					<picker @change="bindPickerChange2" :value="modeIndex" :range="modeColumns">
						<view :class="mode?'main--color':'text-subheading'">
							{{mode||"请选择退货方式"}}
						</view>
					</picker>
					<uni-icons type="forward" size="18" color="#427CFC"></uni-icons>
				</view>
			</view>
			<view class="border mt-2 rounded-big px-3 py-2">
				<view>
					补充描述和凭证
				</view>
				<view class="rounded-big" style="background-color: #FAFAFA;overflow: hidden;">
					<textarea style="font-size: 28rpx; padding: 20rpx;" placeholder="补充描述，有助于商家更好的处理售后问题" auto-height
						placeholder-style="color:#99a6b8" v-model="message" maxlength="200" />
					<view class="text-right px-2">
						{{tetArea}}/200
					</view>
					<view class="p-2">
						<uni-file-picker limit="6" v-model="fileList" @select="select" @progress="progress"
							@success="success" @fail="fail" :imageStyles="imageStyles">
							<view class="font-sm text-center" style="color: #A3A3A3;">
								<image src="/static/icon/upload.png" style="width: 50rpx;" mode="widthFix"></image>
								<view class="line-h">
									上传凭证
								</view>
								<view class="line-h-md">
									（最多6张）
								</view>
							</view>
						</uni-file-picker>
					</view>
				</view>
			</view>
		</view>
		<view class="position-fixed bottom-0 w-100 py-2 border-top bg-white" @click="sub">
			<view class="main-bg-color font-weight text-center rounded-md mx-2  line-h-big text-white">
				申请退款
			</view>
		</view>
	</view>
</template>

<script>
	import {
		fenToYuan,
		yuanToFen
	} from "@/common/lib/utils"
	export default {
		name: '',
		components: {

		},
		data() {
			return {
				druglist: [{
					id: "1",
					checked: false,
					price: 12.2,
					num: 2
				}, {
					id: "2",
					checked: false,
					price: 10.2,
					num: 3
				}, {
					id: "3",
					checked: false,
					price: 15,
					num: 2
				}],
				// 选中列表（存放选中的id）
				selectedList: [],
				reason: '',
				reasonColumns: ['不需要了', '收到商品描述不符合', '假冒品牌', '其他'],
				reasonIndex: 0,
				totalMoney: '0',
				mode: '',
				modeColumns: ['到店'],
				modeIndex: 0,
				message: '',
				fileList: [],
				imageStyles: {
					"border": { // 如果为 Boolean 值，可以控制边框显示与否
						"color": "#999", // 边框颜色
						"width": "1px", // 边框宽度
						"style": "dashed", // 边框样式
					}
				}
			}
		},
		methods: {
			sub() {
				if(!this.totalMoney){
					uni.showToast({
						icon:"none",
						title:"请选择退款药品"
					})
					return
				}
				
				
				console.log(this.reason);
				console.log(this.totalMoney);
				console.log(this.mode);
				console.log(this.fileList);
			},


			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},
			// 上传成功
			success(e) {
				console.log('上传成功')
			},
			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},

			//退款原因数据内容
			bindPickerChange: function(e) {
				this.reasonIndex = e.detail.value;
				this.reason = this.reasonColumns[this.reasonIndex];
			},
			// 退货方式
			bindPickerChange2: function(e) {
				this.modeIndex = e.detail.value;
				this.mode = this.modeColumns[this.modeIndex];
			},
			// 选择项目
			selectItem(index) {
				let id = this.druglist[index].id
				let i = this.selectedList.indexOf(id)
				// 之前是选中，取消选中 
				if (i > -1) {
					// 取消当前商品选中状态
					this.druglist[index].checked = false
					// 移除选中列表中的当前商品
					return this.selectedList.splice(i, 1)
				}
				// 选中
				this.druglist[index].checked = true
				this.selectedList.push(id)
			},
			// 全选非全选
			doSelectAll() {
				this.checkedAll ? this.unSelectAll() : this.selectAll()
			},
			// 全选
			selectAll() {
				this.selectedList = this.druglist.map(v => {
					// 设置选中状态
					v.checked = true
					return v.id
				})
			},
			// 取消全选
			unSelectAll() {
				this.druglist.forEach(v => {
					// 设置选中状态
					v.checked = false
				})
				this.selectedList = []
			},
		},
		computed: {
			tetArea() {
				return this.message.length || 0;
			},
			// 判断是否全选
			checkedAll: (state) => {
				return state.druglist.length === state.selectedList.length
			},
			// 合计总价
			totalPrice: (state) => {
				var total = 0
				state.druglist.forEach(v => {
					if (state.selectedList.indexOf(v.id) > -1) {
						total += yuanToFen(v.price) * v.num
					}
				})
				state.totalMoney = total;
				return fenToYuan(total)
			},
		},
	}
</script>

<style scoped>
</style>
