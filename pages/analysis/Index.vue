<template>
	<view class="analysis">
		<view class="analysis-content">
			<view class="analysis-content-title">
				营业数据
			</view>
			<view class="viewBox">
				<view class="analysis-content-box" @click="goGate(item.path)" v-for="(item, index) in bussiness" :key="index">
					<image :src="item.icon"></image>
					<view class="analysis-content-box-right">
						<text class="rightTitle">{{item.title}}</text>
						<text class="rightContent">{{item.value}}</text>
					</view>
				</view>
			</view>
			<view class="bar"></view>
		</view>
		<view class="analysis-content">
			<view class="analysis-content-title">
				商品分析
			</view>
			<view class="viewBox">
				<view class="analysis-content-box" v-for="(item, index) in goodsInfo" :key="index">
					<image :src="item.icon"></image>
					<view class="analysis-content-box-right">
						<text class="rightTitle">{{item.title}}</text>
						<text class="rightContent">{{item.value}}</text>
					</view>
				</view>
			</view>
			<view class="bar"></view>
		</view>
		<view class="analysis-content">
			<view class="analysis-content-title">
				商品管理
			</view>
			<view class="viewBox">
				<view class="analysis-content-box" v-for="(item, index) in goodsManage" :key="index">
					<image :src="item.icon"></image>
					<view class="analysis-content-box-right">
						<text class="rightTitle">{{item.title}}</text>
						<text class="rightContent">{{item.value}}</text>
					</view>
				</view>
			</view>
			<view class="bar"></view>
		</view>
		<view class="analysis-content">
			<view class="analysis-content-title">
				账务对账
			</view>
			<view class="viewBox">
				<view class="analysis-content-box" @click="goGate(item.path)" v-for="(item, index) in zw" :key="index">
					<image :src="item.icon"></image>
					<view class="analysis-content-box-right">
						<text class="rightTitle">{{item.title}}</text>
						<text class="rightContent">{{item.value}}</text>
					</view>
				</view>
			</view>
			<view class="bar"></view>
		</view>
		<view class="analysis-content">
			<view class="analysis-content-title">
				供应商管理
			</view>
			<view class="viewBox">
				<view class="analysis-content-box" @click="goGate(item.path)" v-for="(item, index) in gys" :key="index">
					<image :src="item.icon"></image>
					<view class="analysis-content-box-right">
						<text class="rightTitle">{{item.title}}</text>
						<text class="rightContent">{{item.value}}</text>
					</view>
				</view>
			</view>
			<view class="bar"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				bussiness: [
					{
						icon: require('../../static/images/analysis/销售统计.png'),
						title: '销售统计',
						value: '销售统计和收款构成',
						path: '../SalesStatistics/Index'
					},
					{
						icon: require('../../static/images/analysis/交易查询.png'),
						title: '交易查询',
						value: '查询交易订单'
					},
					{
						icon: require('../../static/images/analysis/重点关注.png'),
						title: '重点关注',
						value: '门店异常监控'
					},
					{
						icon: require('../../static/images/analysis/会员分析.png'),
						title: '会员分析',
						value: '会员销售监控',
						path: '../menber/index'
					},
				],
				goodsInfo: [
					{
						icon: require('../../static/images/analysis/本店热卖.png'),
						title: '本店热卖',
						value: '本店商品排行'
					},
					{
						icon: require('../../static/images/analysis/本店促销.png'),
						title: '本店促销',
						value: '本店促销商品排行'
					},
					{
						icon: require('../../static/images/analysis/类别排行.png'),
						title: '类别排行',
						value: '类别销售排行'
					},
					{
						icon: require('../../static/images/analysis/品牌排行.png'),
						title: '品牌排行',
						value: '品牌销售排行'
					},
				],
				goodsManage: [
					{
						icon: require('../../static/images/analysis/商品库存.png'),
						title: '商品库存',
						value: '查询商品库存'
					},
					{
						icon: require('../../static/images/analysis/联营商品.png'),
						title: '联营商品',
						value: '联营商品销售统计'
					}
				],
				zw: [
					{
						icon: require('../../static/images/analysis/财务对账.png'),
						title: '收银员对账',
						value: '收银统计',
						path: '../bank/Index'
					},
				],
				gys: [
					{
						icon: require('../../static/images/analysis/供应商.png'),
						title: '供应商查询',
						value: '查询供应商详情',
						path: '../supplier/Index'
					},
				],
			}
		},
		methods: {
			goGate (path) {
				uni.navigateTo({
					url: path
				})
			},
		}
	}
</script>

<style lang="scss">
	.analysis {
		.bar {
			height: 12px;
			background-color: #f7f8fa;
		}
		&-content {
			padding: 10px;
			&-title {
				padding-bottom: 10px;
				font-size: 15px;
				font-weight: 500;
				border-bottom: 1px solid #EEEEEE;
			}
			.viewBox {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
			}
			&-box {
				box-sizing: border-box;
				padding-left: 7px;
				max-width: 48%;
				width: 48%;
				image {
					width: 35px;
					height: 35px;
					margin-right: 10px;
					flex: none;
				}
				//padding: 10px;
				margin: 10px 0 10px 5px;
				display: flex;
				align-items: center;
				flex-direction: row;
				// flex-wrap: wrap;
				&-right {
					text {
						display: block;
					}
					.rightTitle {
						font-size: 15px;
						font-weight: 500;
					}
					.rightContent {
						font-size: 13px;
						color: $uni-text-color-v;
					}
					
				}
			}
		}
	}
</style>
