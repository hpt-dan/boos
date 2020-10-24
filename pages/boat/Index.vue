<template>
	<view class="boat">
		<view class="header">
			<text class="header-left">
				全部门店
			</text>
			<text class="header-right" @click="backtochose">
				切换门店
			</text>
		</view>
		<view class="boat-pre" v-if="dataForm != 0">
			<view class="boat-pre-box" v-for="(item,idx) in bgcList" :key="idx">
					<view class="boat-pre-bg" :style="{ 'background-image': 'url(' + item.image + ')','background-repeat':'no-repeat' ,'height':`${cWidth/3/2}px`}">
						<text class="boat-pre-bg-title">{{item.title}}</text>
						<text class="boat-pre-bg-number">{{item.value}}</text>
					</view>
			</view>
		</view>
		<view class="content">
			<text class="title">业绩统计</text>
			<text class="detail">(当前数据统计截止到: 2020-08-11 18:00:00)</text>
		</view>
		<view class="box">
			<uni-grid :column="2" :showBorder="false" >
				<uni-grid-item style="background-color: #F4F7FE;">
					<view class="box-left">
						<text class="title">今日销售额(元)</text>
						<text class="number">0.00</text>
					</view>
				</uni-grid-item>
				<uni-grid-item  style="background-color: #F4F7FE;">
					<view class="box-rigth">
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
			<uni-grid :column="2" :showBorder="false" >
				<uni-grid-item style="background-color: #F2F7F9;">
					<view class="box-left">
						<text class="title">今日销售额(元)</text>
						<text class="number">0.00</text>
						<text class="more">
							<text>比前日</text>
							<text class="orange">--持平</text>
						</text>
					</view>
				</uni-grid-item>
				<uni-grid-item  style="background-color: #F2F7F9;">
					<view class="box-rigth">
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
			<uni-grid :column="2" :showBorder="false" >
				<uni-grid-item style="background-color: #FCFBF7;">
					<view class="box-left">
						<text class="title">昨日销售(元)</text>
						<text class="number">0.00</text>
						<text class="more">上月同期
							<text class="red"> ↑️308.80</text>
						</text>
					</view>
				</uni-grid-item>
				<uni-grid-item  style="background-color: #FCFBF7;">
					<view class="box-rigth">
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
						<view class="top">
							<text class="top-word">订单数</text>
							<text class="top-number">0</text>
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="bar"></view>
		<view class="rank" v-if="dataForm === 0">
			<view class="rank-header">
				<text class="rank">
					昨日门店排行
				</text>
				<view class="righticon">
					<text class="all">全部</text>
					<uni-icons type="arrowright" color="#007aff"></uni-icons>
				</view>
			</view>
			<view class="rank-box" v-for="(item, index) in rank" :key="index">
				<view class="rank-box-left">
					<image src="../../static/images/1.png" v-if="index === 0"> </image>
					<image src="../../static/images/2.png" v-if="index === 1"></image>
					<image src="../../static/images/3.png" v-if="index === 2"></image>
					<view class="df">
						<text class="rank-box-left-title">{{item.name}}</text>
						<text class="rank-box-left-value">订单数: {{item.number}}</text>
					</view>
				</view>
				<view class="rank-box-left">
					<view class="df">
						<text class="rank-box-left-title">¥ {{item.amount}}</text>
						<text class="rank-box-left-value">销售额</text>
					</view>
				
				</view>
			</view>
		</view>
		<view class="chart" v-if="dataForm !== 0">
			<view class="chart-title">
				上周业绩趋势
			</view>
			<view class="chart-content">
				<canvas canvas-id="canvasColumn" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA" id="canvasColumn" class="charts"></canvas>
			</view>
		</view>
		<view class="bar"></view>
		<view class="rank">
			<view class="rank-header">
				<text class="rank">
					全店热卖
				</text>
				<view class="righticon" @click="goHot">
					<text class="all">全部</text>
					<uni-icons type="arrowright" color="#007aff"></uni-icons>
				</view>
			</view>
			<view class="hot">
				<view class="hot-tab">
					<uni-segmented-control :current="current" :values="items"></uni-segmented-control>
					<no-data title="近14天您的门店为产生交易订单" v-if="goodsList.legend < 1"></no-data>
					<my-goods :list="goodsList" v-if="goodsList.length > 0" @onClick="goDetail"></my-goods>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import uCharts from '../../components/u-charts/u-charts.js';
	let canvaLineA = null;
	export default {
		data() {
			return {
				goodsList: [
					{
						name: '沙宣清衡水润洗发露',
						sale: 321,
						amount: 113333.50,
					},
					{
						name: '老李五香翅',
						sale: 76,
						amount: 324.50,
					},
					{
						name: '娃哈哈AD钙奶',
						sale: 55,
						amount: 223.89,
					},
					{
						name: '大白天奶糖144G',
						sale: 12,
						amount: 113.50,
					},
					{
						name: '454G大香蕉',
						sale: 2,
						amount: 23.89,
					},
				],
				bgcList : [
					{
						image: require('../../static/images/boat/2.png'),
						title: '动销异常',
						value: 12,
					},
					{
						image: require('../../static/images/boat/1.png'),
						title: '大库存',
						value: 12,
					},
					{
						image: require('../../static/images/boat/3.png'),
						title: '负库存',
						value: 12,
					},
					{
						image: require('../../static/images/boat/4.png'),
						title: '负毛利',
						value: 12,
					},
					{
						image: require('../../static/images/boat/5.png'),
						title: '滞销品',
						value: 12,
					},
					{
						image: require('../../static/images/boat/6.png'),
						title: '赠品监控',
						value: 12,
					},
				],
				current: 0,
				items: ['条码商品', '全部商品'],
				dataForm: null,
				rank: [
					{
						name: '公司总部',
						number: 133,
						amount: '13142.53'
					},
					{
						name: '武陵区分店',
						number: 83,
						amount: '9872.50'
					},
					{
						name: '鼎城区分店',
						number: 37,
						amount: '6043.00'
					},
				],
				pixelRatio: 1,
				chartData: {
					categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
					series: [{
						name: '成交量A',
						data: [35, 20, 25, 37, 4, 20],
						color: '#000000'
					}, {
						name: '成交量B',
						data: [70, 40, 65, 100, 44, 68]
					}, {
						name: '成交量C',
						data: [100, 80, 95, 150, 112, 132]
					}]
				},
				cWidth:'',
				cHeight:'',
			}
		},
		onShow() {
			this.dataForm = uni.getStorageSync('store')
			uni.getSystemInfo({
				success: (res) => {
					console.log(res)
					this.cWidth = res.screenWidth
					if (res.pixelRatio > 1) {
						this.pixelRatio = 2
					}
					console.log(this.pixelRatio)
				}
			});
			// this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getChart('canvasColumn',this.chartData)
		},
		methods: {
			goDetail (e) {
				uni.navigateTo({
					url: '../goods/index'
				})
			},
			touchLineA (e) {
				 canvaLineA.scrollStart(e);
			},
			moveLineA (e) {
				 canvaLineA.scroll(e);
			},
			touchEndLineA (e) {
				canvaLineA.scrollEnd(e)
			},
			getChart (canvasId,chartData) {
				 canvaLineA = new uCharts({
				                $this: this,
				                canvasId: canvasId,
				                type: 'line',
				                fontSize: 11,
				                legend: true,
				                dataLabel: false,
				                dataPointShape: false,
				                background: '#FFFFFF',
				                pixelRatio: 1,
				                categories: chartData.categories,
				                series: chartData.series,
				                animation: true,
				                enableScroll: true, //开启图表拖拽功能
				                xAxis: {
				                    disableGrid: false,
				                    type: 'grid',
				                    gridType: 'dash',
				                    //                   itemCount: 4, //可不填写，配合enableScroll图表拖拽功能使用，x轴单屏显示数据的数量，默认为5个
									itemCount: 5,
				                    scrollShow: true, //新增是否显示滚动条，默认false
				                    scrollAlign: 'left',
				                },
				                yAxis: {
				                    disabled:true,
				                    gridType: 'dash',
				                    splitNumber: 8,
				                    //min: 10,
				                    //max: 180,
				                    // format: (val) => {
				                    //     return val.toFixed(0) + '件'
				                    // } //如不写此方法，Y轴刻度默认保留两位小数
				                },
				                width: this.cWidth,
				                height: 300,
				                dataLabel: true,
				                dataPointShape: true,
				                extra: {
				                    lineStyle: 'straight'
				                },
				            });
			},
			goHot () {
				uni.navigateTo({
					url:'../hotList/Index'
				})
			},
			backtochose () {
				uni.navigateTo({
					url: '../index/index'
				})
			},
		}
	}
</script>

<style lang='scss'>
	.boat {
		padding-bottom: 50px;
		.bar {
			height: 12px;
			background-color: #f7f8fa;
		}
		.boat-pre {
			display: flex;
			flex-wrap: wrap;
			.boat-pre-box {
				padding: 5px;
				box-sizing: border-box;
				width: 33%;
				.boat-pre-bg {
					/* height: 60px; */
					/* background-repeat: no-repeat center center; */
					background-size: 100% 100%;
					padding-left: 5px;
					padding-top: 3px;
					text {
						display: block;
						color: #FFFFFF;
					}
					&-title {
						font-size: 14px;
					}
					&-number {
						text-align: center;
						display: inline-block;
						vertical-align: middle;
					}
				}
			}
		}
		
		.uni-grid {
			margin-bottom: 15px;
		}
		.uni-grid-item {
			height: 150px!important
		}
		.chart {
			padding: 10px;
			&-title {
				font-weight: 600;
				font-size: 17px;
				margin-bottom: 5px;
			}
			&-content {
				.charts {
					height: 300px;
					width: 100%;
				}
			}
		}
		.rank {
			padding: 10px;
			.rank-box:last-child {
				border: none;
			}
			.hot {
				&-tab {
					padding: 5px;
				}
			}
			.rank-box {
				padding: 10px 5px 15px 5px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid #eeeeee;
				text {
					display: block;
				}
				.rank-box-left {
					display: flex;
					image {
						width: 20px;
						height: 20px;
						margin-right: 10px;
					}
					&-title {
						font-weight: 500;
						font-size: 15px;
						min-width: 80px;
						margin-bottom: 3px;
					}
					&-value {
						color: $uni-text-color-v;
						font-size: 13px;
					}
				}
			}
			.rank-header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.rank {
					font-weight: 600;
					font-size: 17px;
				}
				.all {
					font-weight: 600;
					color: $uni-color-primary;
				}
			}
		}
		.box {
			padding: 0 15px;
			text {
				display: block;
			}
			.box-rigth {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				padding: 20px 30px 20px 10px;
				.top {
					margin-bottom: 15px;
					width: 50%;
					
					.top-word {
						color: $uni-text-color-v;
						font-weight: 400;
					}
					.top-number {
						font-weight: 600;
					}
					
				}
			}
			.box-left {
				.more {
					font-size: 13px;
					color: #666670;
					text {
						display: inline-block;
					}
					display: flex;
					flex-direction: row;
					.orange {
						color: #E8A74E;
					}
					.red {
						color: #E05869;
					}
				}
				.title {
					font-size: 13px;
					font-weight: 500;
					color: $uni-text-color-v;
				}
				.number {
					color: $uni-color-primary;
					font-size: 20px;
					font-weight: 600;
				}
				padding-left: 15px;
				margin: auto 0;
				text-align: left;
			}
		}
		.content {
			margin-bottom: 7px;
			padding: 10px;
			.title {
				font-size: 18px;
				font-weight: 600;
			}
			.detail {
				font-size: 13px;
				color: #B0B0B0;
			}
		}
		.header {
			background-color: $uni-color-primary;
			padding: 6px 13px 6px 13px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.header-left {
				color: #FFFFFF;
				font-weight: 600;
				font-size: 17px;
			}
			.header-right {
				color: #FFFFFF;
				padding: 5px 10px;
				background-color: #5A85F7;
				border: #FFFFFF 1px solid;
				border-radius: 20px;
				font-size: 13px;
			}
		}
	}
</style>
