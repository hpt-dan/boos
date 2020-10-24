<template>
	<view class="goodsIndex">
		<view class="goodsIndex-img">
			<image src="../../static/images/goods/wangzai.jpeg" mode="aspectFit"></image>
			<text class="name">旺仔牛奶 (好喝的版本)</text>
			<text class="code">商品条码: 888888888888</text>
		</view>
		<view class="goodsIndex-box">
			<uni-grid :column="3" borderColor="#E6EFFD">
				<uni-grid-item v-for="(item, index) in list" :key="index">
				        <view class="boxin">
							<text class="label">{{item.label}}</text>
							<text class="value" >{{item.value}}</text>
						</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="bar"></view>
		<view class="goodsQS">
			<view class="title">
				<text class="big">近两周销售趋势</text>
				<text class="small">(门店)</text>
			</view>
			<view class="sw">
				<uni-segmented-control :current="current" :values="items"></uni-segmented-control>
			</view>
			<view class="chart-content">
				<canvas canvas-id="canvasColumn" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA" id="canvasColumn" class="charts"></canvas>
			</view>
		</view>
		<view class="bar"></view>
		<view class="goodsInfo">
			<text class="title">商品信息</text>
			<uni-list>
				 <uni-list-item  title="货号"  rightText="右侧文字" :showArrow="false"></uni-list-item>
				 <uni-list-item  title="条码"  rightText="右侧文字" :showArrow="false"></uni-list-item>
				 <uni-list-item  title="规格"  rightText="右侧文字" :showArrow="false"></uni-list-item>
				 <uni-list-item  title="单位"  rightText="右侧文字" :showArrow="false"></uni-list-item>
				 <uni-list-item  title="品类"  rightText="右侧文字" :showArrow="false"></uni-list-item>
				 <uni-list-item  title="品牌"  rightText="右侧文字" :showArrow="false"></uni-list-item>
				 <uni-list-item  title="厂商名称"  rightText="右侧文字" :showArrow="false"></uni-list-item>
				 <uni-list-item  title="供应商"  rightText="右侧文字" :showArrow="false"></uni-list-item>
				 <uni-list-item  title="供应商地址"  rightText="右侧文字" :showArrow="false"></uni-list-item>
				 <uni-list-item  title="进价"  rightText="右侧文字" :showArrow="false"></uni-list-item>
				 <uni-list-item  title="零售价"  rightText="右侧文字" :showArrow="false"></uni-list-item>
				 <uni-list-item  title="会员价"  rightText="右侧文字" :showArrow="false"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uCharts from '../../components/u-charts/u-charts.js';
	let canvaLineA = null;
	export default {
		data () {
			return {
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
				current: 0,
				items: ['销售额', '销量'],
				list: [
					{
						label: '区域参考价',
						value: 123.66,
					},
					{
						label: '区域参考价',
						value: 123.66,
					},
					{
						label: '区域参考价',
						value: 123.66,
					},
					{
						label: '区域参考价',
						value: 123.66,
					},
					{
						label: '区域参考价',
						value: 123.66,
					},
					{
						label: '区域参考价',
						value: 123.66,
					},
					{
						label: '区域参考价',
						value: 123.66,
					},
					{
						label: '区域参考价',
						value: 123.66,
					},
					{
						label: '区域参考价',
						value: 123.66,
					},
				]
			}
		},
		onShow () {
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
		}
	}
</script>

<style lang="scss">
	.goodsIndex {
		.goodsInfo {
			margin-top: 15px;
			.title {
				font-size: 17px;
				font-weight: 600;
			}
		}
		.uni-grid-item {
			background-color: rgb(248, 250 ,255);
			
		}
		.bar {
			height: 12px;
			background-color: #f7f8fa;
		}
		.boxin {
			padding: 25px 0 0 15px;
			text {
				display: block;
			}
			.label {
				//color: $uni-bg-color-v;
				margin-bottom: 5px;
				font-size: 15px;
			}
			.value {
				font-family: Arial,Microsoft YaHei,黑体,宋体,sans-serif;
				font-size: 17px;
				font-weight: 600;
			}
		}
		padding: 0 10px;
		.goodsIndex-box {
			margin: 15px 0;
		}
		.chart-content {
			margin: 15px 0;
			.charts {
				height: 300px;
				width: 100%;
			}
		}
		.goodsQS {
			margin-top: 15px;
			.title {
				margin-bottom: 15px;
				text {
					display: inline-block;
				}
				.big {
					font-size: 20px;
					font-weight: 600;
				}
				.small {
					color: $uni-text-color-grey;
				}
			}
		}
		.goodsIndex-img {
			image {
				width: 100%;
				height: 300px;
			}
			text {
				display: block;
			}
			.name {
				margin: 7px 0;
				font-size: 18px;
				font-weight: 600;
			}
			.code {
				font-size: 15px;
			}
		}
	}
</style>
