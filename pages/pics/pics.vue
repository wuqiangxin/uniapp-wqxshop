<template>
	<view class="contact">
		<image class="img" src="https://api-hmugo-web.itheima.net/pyg/banner1.png"></image>
		<view class="info">
			<view @click="phone">联系电话：400-7224-5678 （点击拨打）</view>
			<view>校区地址：南部县幸福小学</view>
		</view>
		<map class="map" :scale="scale" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 31.354024,
				longitude: 106.04299,
				// 缩放
				scale: 13,
				markers: [
					{
						latitude: 31.354024,
						longitude: 106.04299,
						iconPath: '../../static/hmlogo.png',
						width: 30,
						height: 30
					}
				]
			}
		},
		methods: {
			// 拨打电话
			phone() {
				uni.makePhoneCall({
					phoneNumber: '400-7224-5678' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}
		
		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		
		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}

</style>
