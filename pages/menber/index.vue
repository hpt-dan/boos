<template>
	<view class="member">
		<view class="memberCard">
			<view class="memberCard-box">
				<view class="label">会员销售额</view>
				<view class="value">13.23</view>
				<view class="desc">新会员消费: 1332.03</view>
			</view>
			<view class="memberCard-box, miniBorder">
				<view class="label">充值金额</view>
				<view class="value">13.23</view>
				<view class="desc">赠送金额: 1332.03</view>
			</view>
		</view>
		<view class="memberCardTime">
				<uni-segmented-control active-color="#ffffff" color="#B6C9FB" class="hotContent-switch-left" style-type="text" :current="current" :values="items" ></uni-segmented-control>
		</view>
		<my-timerange></my-timerange>
		<view class="bar"></view>
		<view class="memberStatus">
			<view class="title">会员统计</view>
			<view class="memberStatusBox">
				<view class="minibox">
					<view class="number">356</view>
					<view class="label">会员总数</view>
				</view>
				<view class="minibox">
					<view class="number">356</view>
					<view class="label">会员总数</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				current: 1,
				items: [
					'今日',
					'昨日',
					'上周',
					'本月',
					'上月',
					'自定义',
				]
			}
		}
	}
</script>

<style lang="scss">
	.member {
		.bar {
			height: 12px;
			background-color: #f7f8fa;
		}
		padding: 10px;
		.segmented-control__text {
			color: rgb(182,201,251)
		}
		.memberCardTime {
			padding-bottom: 5px;
			border-top: 1px solid rgb(96,153,244);
			background-color: rgb(77,131,245);
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
		}
		.memberCard {
			border-top-right-radius: 5px;
			border-top-left-radius: 5px;
			color: #FFFFFF;
			background-color: rgb(77,131,245);
			display: flex;
			flex-direction: row;
			align-items: center;
			.miniBorder  {
				border-left: rgb(96,153,244) solid 1px;
			}
			.memberCard-box {
				padding: 15px;
				flex: 1;
				.label {
					font-size: 15px;
				}
				.value {
					font-size: 18px;
					margin: 10px 0;
				}
				.desc {
					
					font-size: 13px;
				}
			}
		}
		.memberStatus {
			margin-top: 20px;
			.title {
				font-weight: 600;
				font-size: 17px;
				margin-bottom: 15px;
			}
			.memberStatusBox {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.minibox:first-child {
					margin-right: 10px;
				}
				.minibox {
					padding: 20px 0 30px 20px;
					border-radius: 5px;
					background-color: rgb(243,250,252);
					border: 1px solid rgb(240,247,250);
					color: rgb(81,171,202);
					flex: 1;
					.number {
						font-size: 17px;
						font-weight: 600;
						margin-bottom: 15px;
					}
					.label {
						color: #000000;
					}
				}
			}
		}
	}
</style>
