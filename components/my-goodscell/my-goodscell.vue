<template>
	<view class="my-goodsCell">
		<view class="my-goodsCell-title">
			<text class="leftBox">商品名称</text>
			<view class="rightbox">
				<text class="left">销量</text>
				<text>销售额(元)</text>
			</view>
		</view>
		<view class="goodsBox"  v-for="(item , index) in list" :key="index" :class="index===0? 'first': index===1? 'second': index===2? 'third': ''">
			<view class="goodsBox-img">
				<image src="../../static/images/1.png" v-if="index === 0"> </image>
				<image src="../../static/images/2.png" v-if="index === 1"></image>
				<image src="../../static/images/3.png" v-if="index !== 1 && index !== 0"></image>
				<text>{{item.name}}</text>
			</view>
			<view class="goodsBoxDetail" >
				<text class="left" >{{item.sale}}</text>
				<text class="right">{{item.amount}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
			}
		},
		name: 'my-goodscell',
		data () {
			return {
				
			}
		},
	}
</script>

<style lang="scss">
	.my-goodsCell {
		.first {
			background-color: rgb(244,247,254);
			.right {
				color: $uni-color-primary;
			}
		}
		.second {
			background-color: rgb(243,250,252);
			.right {
				color: rgb(81,171,202)
			}
		}
		.third {
			background-color: rgb(254,252,248);
			.right {
				color: rgb(242,174,94)
			}
		}
		.goodsBox {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 15px 15px;
			border-bottom: #EEEEEE 1px solid;
			image {
				width: 20px;
				height: 20px;
				margin-right: 10px;
				flex: none;
			}
			.goodsBox-img {
				flex: 1;
				display: flex;
				flex-direction: row;
				align-items: center;
			}
			.goodsBoxDetail {
				flex: 1;
				display: flex;
				justify-content: space-between;
				.left {
					margin-left: 50px;
				}
				.right {
					
					//margin-left: 40px;
				}
			}
		}
		.my-goodsCell-title {
			padding: 10px 15px;
			color: $uni-text-color-v;
			font-size: 14px;
			.leftBox {
				flex: 1;
			}
			.rightbox {
				flex: 1;
				display: flex;
				justify-content: space-between;
				.left {
					margin-left: 50px;
				}
			}
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: rgb(245,246,248),
			
		}
	}
</style>
