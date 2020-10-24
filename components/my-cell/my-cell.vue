<template>
	<view class="mycell" @click="goRouter">
		<text>{{name}}</text>
		<uni-icons type="arrowright" color="#BBBBBB"></uni-icons>
	</view>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				default: ''
			}
		},
		name: 'my-cell',
		data() {
			return {
			
			}
		},
		created() {
			
		},
		methods: {
			goRouter() {
				this.$emit('click')
			},
		}
	}
</script>

<style lang="scss">
	.mycell {
		border-bottom: 1px solid #E5E5E5;
		padding: 12px 10px;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.mycell:active {
		background-color: ghostwhite;
	}
</style>
