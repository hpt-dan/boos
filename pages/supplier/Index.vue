<template>
	<view class="supplier">
		<view class="supplier-search">
			<uni-search-bar @confirm="confirm"  placeholder="搜索供应商名称/联系人/手机号."/>
		</view>
		<view class="supplier-box" v-for="item in 5" >
			<uni-card title="餐饮采购"   thumbnail="../../static/images/face.png">
				<view class="supplier-box-cell">
					<text>联系人: -</text>
					<text>手机号: -</text>
					<text>地 址 : -</text>
				</view>
			</uni-card>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			confirm(val) {
				
			}
		}
	}
</script>

<style lang="scss">
	.supplier {
		background-color: $uni-bg-color-v;
		.uni-card__header-title-text {
			font-weight: 500;
		}
		.uni-card {
			background-color: rgb(255,255,255)
		}
		.supplier-search {
			padding: 10px;
		}
		.supplier-box {
			margin-bottom: 10px;
			.supplier-box-cell {
				text {
					margin: 5px 0;
					display: block;
				}
			}
		}
	}
</style>
