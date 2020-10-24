<template>
	<view class="my-timerange-box">
		<view class="my-timerange">
			<text @click="showPicker">2020-08-21</text>
			<text>至</text>
			<text @click="showPicker">2020-08-21</text>
		</view>
		<!-- <w-picker :visible.sync="visible" mode="date" @confirm="onConfirm($event,'date')"   @cancel="onCancel" :current="true" :disabled-after="true"></w-picker> -->
		<w-picker
		                :visible.sync="visible"
		                mode="date" 
		                startYear="2017" 
		                :current="true"
		                fields="day"
		                @confirm="onConfirm($event,'date')"
		                @cancel="onCancel"
		                disabled-after
		                ref="date" 
		            ></w-picker>
	</view>
</template>

<script>
	export default {
		name: 'myTimerange',
		data () {
			return {
				visible: false
			}
		},
		created() {
			let res = new Date()
			console.log(res)
		},
		methods:  {
			onCancel () {},
			onConfirm (val) {
				console.log(val)
			},
			showPicker () {
				this.visible = true
			}
		}
	}
</script>

<style lang="scss">
	.my-timerange {
		border-top: 1px solid #EEEEEE;
		border-bottom: 1px solid #EEEEEE;
		padding: 10px 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
</style>
