<template >
	<view class="saleSta">
		<view class="saleSta-header">
			<uni-segmented-control class="hotContent-switch-left" style-type="text" :current="current" :values="items" ></uni-segmented-control>
			<my-timerange></my-timerange>
		</view>
		<view class="bar"></view>
		<view class="saleBox-title">
			当前数据统计截止到:2020-08-20 20:33:00
		</view>
		<view class="saleBox">
			<view class="saleBox-head">
				<text class="moeny">销售额</text>
				<text class="num">1314.49</text>
			</view>
			<uni-grid :column="2" borderColor="#E6EFFD">
				<uni-grid-item v-for="(item, index) in list" :key="index">
				        <view class="boxin">
							<text class="label">{{item.label}}</text>
							<text class="value" >{{item.value}}</text>
						</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="bar"></view>
		<view class="classrank">
			<text class='storeRank'>门店排名</text>
			<my-goodscell :list="goodsList" v-if="goodsList.length > 0"></my-goodscell>
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				goodsList: [
					{
						name: '沙宣清衡水润洗发露',
						sale: 321.98,
						amount: 113222.53,
					},
					{
						name: '老李五香翅',
						sale: 76.98,
						amount: 324.52,
					},
					{
						name: '娃哈哈AD钙奶,乖乖长大的啊',
						sale: 55.98,
						amount: 223.89,
					},
					{
						name: '大白天奶糖144G',
						sale: 12.98,
						amount: 113.59,
					},
					{
						name: '454G大香蕉',
						sale: 23.98,
						amount: 23.89,
					},
				],
				list: [
					{
						label: '订单数',
						value: 12,
					},
					{
						label: '客单价',
						value: 123.66,
					},
					{
						label: '毛利率',
						value: '55.33%',
					},
					{
						label: '毛利额',
						value: 123.66,
					},
				],
				items: [
					'今日',
					'昨日',
					'本周',
					'本月',
					'上月',
					'自定义',
				],
			
			}
		},
		async created() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" >
	.saleSta {
		.boxin {
			padding: 30px 0 0 20px;
		}
		.classrank {
			.storeRank {
				display: block;
				margin: 10px;
				font-size: 18px;
				font-weight: 600;
			}
		}
		.uni-grid-item {
			height: 100px !important;
			}
		.bar {
			height: 12px;
			background-color: #f7f8fa;
		}
		.saleBox-title {
			padding: 10px 10px 10px 20px; 
			color: $uni-text-color-v;
		}
		.saleBox {
			margin: 10px;
			border-radius: 5px;
			border: 1px solid rgb(241,245,255);
			background-color: rgb(248,250,255);
			text {
				display: block;
			}
			.saleBox-head {
				padding: 10px 15px;
				.moeny {
					color: $uni-text-color-v;
				}
				.num {
					margin-top: 5px;
					color: $uni-color-primary;
					font-weight: 500;
					font-size: 20px;
				}
			}
		}
	}
</style>
