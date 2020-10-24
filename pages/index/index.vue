<template>
	<view class="container">
		<!-- <view>
			<button open-type="getPhoneNumber" @getphonenumber="getphonenumber">获取手机号码</button>
		</view> -->
		<view class="header">
			<uni-search-bar @confirm="confirm"  placeholder="请输入门店名称进行搜索."/>
		</view>
		<view class="title">
			<text>您拥有多家门店的后台管理权限,请选择需要查看的门店</text>
		</view>
		
		<view class="content">
			<uni-collapse>
				<uni-collapse-item title="测试" :showAnimation="true" >
					<my-cell @click="goit(0)" name="全部"></my-cell>
					<my-cell @click="goit(1)" name="第一分店"></my-cell>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<!-- <button open-type="getPhoneNumber" :bindgetphonenumber="getPhoneNu">获取手机号码</button> -->
		<!-- <uni-popup type="center" ref="popup">
			</uni-popup> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keywords: null,
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		async created() {
			uni.login({
			  provider: 'weixin',
			  success: function (loginRes) {
			    console.log(loginRes);
				   uni.getUserInfo({
				      provider: 'weixin',
				      success: function (infoRes) {
						  console.log(infoRes)
						uni.setStorageSync('userinfo', infoRes.userInfo);
				      }
				    });
			  }
			});
			let res = await this.$api.getApi({
				phone: 18573658809
			})
			console.log(res)
		},
		onLoad () {
			
		},
		methods: {
			getphonenumber (val) {
				console.log(val.mp.detail)
				console.log(val)
			},
			sumInfo () {
				console.log(val)
			},
			goit (val) {
				uni.setStorageSync(
					'store',val)
				uni.switchTab({
					url: "../boat/Index"
				})
			},
			confirm(val) {
				console.log(val)
				this.keywords = val.value
			},
		}
	}
</script>

<style lang="scss" >
	.container {
		.popupBoat {
			width: 270px;
			background-color: #fff;
			padding: 20px 10px;
			.popupBoat-box{
				margin-top: 20px;
				display: flex;
				flex-direction: row;
				align-items: center;
				input {
					margin-left: 10px;
				}
			}
		}
		.uni-collapse-cell__content {
			padding-left: 15px;
		}
		.header {
			padding: 5px;
		}
		.title {
			background: $uni-bg-color-v;
			padding: 10px;
			font-size: 15px;
			color: $uni-text-color-v
		}
	}
</style>
