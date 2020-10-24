<template>
	<view class="noData">
		<image src="../../static/images/noData1.png"></image>
		<text>{{title}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type : [String,Number],
				default: ''
			}
		},
		data () {
			return {}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.noData {
		padding-top: 50px;
		text-align: center;
		image {
			margin: 0 auto;
			width: 70px;
			height: 70px;
			
		}
		text {
			display: block;
			text-align: center;
			width: 100%;
			margin-top: 5px;
			font-size: 14px;
			font-weight: 400;
			color: rgb(96,96,102);
		}
	}
</style>
