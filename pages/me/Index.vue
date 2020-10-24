<template lang="pug">
	.me
		.me-header
			image(:src="images")
			.me-header-name
				text.name 司徒君杰
				text.number 18573658809
			.icon
				uni-icons(type="compose" size='24' @click="doEdit")
		.bar
		
		uni-popup(ref="popup" type="dialog")
			uni-popup-dialog(type="success" mode="input" title="修改"  @confirm="confirm")
</template>

<script>
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		components: {
			uniPopupDialog
		},
		data() {
			return {
				images: require('../../static/images/me.jpeg')
			}
		},
		async created() {
			
		},
		methods: {
			doEdit () {
				this.$refs.popup.open()
			},
			confirm(done,value) {
				console.log(value)
				done()
			}
		}
	}
</script>

<style lang="scss" >
	.me {
		.bar {
			height: 12px;
			background-color: #f7f8fa;
		}
		&-header {
			position: relative;
			padding: 30px 20px;
			display: flex;
			flex-direction: row;
			align-items: center;
			.icon {
				position: absolute;
				top: 12px;
				right: 12px;
			}
			&-name {
				text {
					display: block;
				}
				.name {
					font-size: 20px;
					font-weight: 500;
				}
				.number {
					font-size: 16px;
					font-weight: 500;
					color: $uni-text-color-v;
				}
			}
			image {
				margin-right: 10px;
				height: 70px;
				width: 70px;
				border-radius: 50%;
			}
		}
		
	}
</style>
