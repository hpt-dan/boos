<template>
	<view class="bank">
		<view class="bank-header">
			<uni-segmented-control class="hotContent-switch-left" style-type="text" :current="current" :values="items" ></uni-segmented-control>
		</view>
		<view class="bank-picker">
			<text class="left" @click="showPicker">2020-08-20</text>
			<text class="mid">至</text>
			<text class="right" @click="showPicker">2020-08-20</text>
		</view>
		<view class="bar"></view>
		<no-data title="该时间段内没有产生交易"></no-data>
		<w-picker :visible.sync="visible" mode="date" @confirm="onConfirm($event,'date')"   @cancel="onCancel" :current="true" :disabled-after="true"></w-picker>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				current: 1,
				visible: false,
				startDate : '',
				endDate : '',
				items: [
					'今日',
					'昨日',
					'上周',
					'本月',
					'上月',
					'自定义',
				]
			}
		},
		created () {
			
		},
		methods: {
			onCancel () {},
			onConfirm (val) {
				console.log(val)
			},
			showPicker () {
				this.visible = true
			},
		}
	}
</script>

<style lang="scss">
	.bank {
		&-picker {
			padding: 15px 30px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-top: 1px solid #EEEEEE;
		}
		.bar {
			height: 12px;
			background-color: #f7f8fa;
		}
	}
</style>
