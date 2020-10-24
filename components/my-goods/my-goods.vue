<template>
	<view class="my-goods">
		<view class="my-goods-box" v-for="(item, index) in list" :key="index" @click="onClick(item)">
			<view class="title" >
				<image src="../../static/images/1.png" v-if="index === 0"> </image>
				<image src="../../static/images/2.png" v-if="index === 1"></image>
				<image src="../../static/images/3.png" v-if="index === 2"></image>
				<image src="../../static/images/3.png" v-if="index === 3"></image>
				<image src="../../static/images/3.png" v-if="index === 4"></image>
				<text>{{item.name}}</text>
			</view>
			<view class="detail">
				<view class="left,boxLeft">
					<text>销量:</text>
					<text class="left-word">{{item.sale}}</text>
				</view>
				<view class="left,box">
					<text class="amount">销售额(元):</text>
					<text class="left-word">  {{item.amount}}</text>
				</view>
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
		name: 'my-goods',
		data () {
			return {
				
			}
		},
		methods: {
			onClick(row) {
				this.$emit('onClick', row)
			}
		}
	}
</script>

<style lang="scss">
	.my-goods {
		max-width: 100%;
		.my-goods-box {
			padding: 15px 0;
			border-bottom: 1px solid #EEEEEE;
			image {
				width: 20px;
				height: 20px;
				margin-right: 5px
			}
			.title {
				display: flex;
				align-items: center;
				margin-bottom: 10px;
				font-size: 17px;
				font-weight: 600;
			}
			.detail {
				width: 100%;
				display: flex;
				flex-direction: row;
				.box {
					margin-left: 60px;
				}
				.boxLeft {
					width: 100px;
				}
				.left  {
					// flex: 1;
					.amount {
						flex: none;
					}
					display: flex;
					flex-wrap: nowrap;
					color: $uni-text-color-v;
					&-word {
						font-weight: 500;
						margin-left: 5px;
						color: #333333;
						
					}
				}
				padding: 0 15px;
				
			}
		}
	}
</style>
