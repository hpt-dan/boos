<template >
	<view class="hotList">
		<uni-popup type="bottom" ref="popup">
			<button type="default" @click="choseEd(1)">按销售额</button>
			<button type="default" @click="choseEd(2)">按毛利额</button>
			<button type="default" @click="choseEd(3)">取消</button>
		</uni-popup>
		<view class="search">
			<uni-search-bar @confirm="confirm"  placeholder="搜索商品名称/条码."/>
		</view>
		<view class="checkBox">
			<view class="checkBox-left" :class="active ===1? 'isActive': ''" @click="changeBox(1)">
				<image src="../../static/images/goods.png" v-if="active === 1" ></image>
				<image src="../../static/images/goodsActive.png" v-if="active === 2" ></image>
				<text class="chekbox-left-word">条码商品</text>
			</view>
			<view class="checkBox-left" :class="active ===2? 'isActive': ''" @click="changeBox(2)">
				<image src="../../static/images/fyActive.png" v-if="active === 1"></image>
				<image src="../../static/images/fy.png" v-if="active === 2"></image>
				<text class="checkBox-left-word">
					全部商品
				</text>
			</view>
		</view>
		<view class="bar"></view>
		<view class="hotContent">
			<view class="hotContent-switch">
				<uni-segmented-control class="hotContent-switch-left" style-type="text" :current="current" :values="items" ></uni-segmented-control>
				<view class="hotContent-switch-right">
					<text @click="popupShow">按销售额</text>
					<uni-icons type="arrowdown" @click="popupShow"></uni-icons>
				</view>
			</view>
			<no-data title="您的门店产生交易订单" v-if="list.length < 1"></no-data>
			<my-goodscell :list="list" v-if="list.length > 0"></my-goodscell>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
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
				active: 1,
				current: 1,
				items: [
					'今日',
					'昨日',
					'近14天',
					'上月',
				],
			}
		},
		async created() {
			
		},
		methods: {
			choseEd () {
				this.$refs.popup.close()
			},
			popupShow () {
				this.$refs.popup.open()
			},
			changeBox(val) {
				this.active = val
			},
			confirm(val) {
				console.log(val)
			},
		}
	}
</script>

<style lang="scss">
	.hotList {
		.bar {
			height: 12px;
			background-color: #f7f8fa;
		}
		.hotContent {
			&-switch {
				padding: 7px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				&-left {
					flex: 1;
				}
				&-right {
					text-align: right;
					width: 30%;
					flex: none;
				}
			}
		}
		.checkBox {
			padding: 10px;
			display: flex;
			flex-direction: row;
			align-items: center;
			.checkBox-left:first-child {
				margin-right: 10px;
			}
			.isActive {
				background: linear-gradient(to right,#569cf2,#4878f6)!important;
				text {
					color: #FFFFFF !important;
						}
			}
			&-left {
				padding: 12px 0;
				text {
					display: block;
					font-size: 13px;
				}
				flex: 1;
				color: $uni-text-color-v;
				border-radius: 5px;
				background-color: rgb(244, 247, 254);
				border: 1px solid rgb(234, 240,253);
				text-align: center;
				image {
					width: 30px;
					height: 30px;
				}
			}
		}
	}
</style>
