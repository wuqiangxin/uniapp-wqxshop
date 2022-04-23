<template>
	<view class="goodsDetail">
		<!-- 轮播图 -->
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>

		<!-- 视频播放 -->
		<view class="video">
			<view>间歇跳绳法</view>
			<video src='../../static/video/tiaosheng.mp4' controls></video>

			<view>胡歌</view>
			<video src='../../static/video/huge.mp4' controls></video>

			<view>改变</view>
			<video src='../../static/video/change.mp4' controls></video>

			<view>跑十公里</view>
			<video src='../../static/video/paobu.mp4' controls></video>
		</view>

		<view class="goodsCav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [],
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad() {
			// 调用函数
			this.getSwipers()
		},
		methods: {
			// 获取 轮播图数据
			async getSwipers() {
				// 自己封装的api 发送请求获取数据
				const res = await this.$myRequest({
					method: 'GET',
					url: '/home/swiperdata'
				})

				this.swipers = res.data.message
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	// 轮播图
	swiper {
		width: 750rpx;
		height: 380rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.video {
		margin-top: 10rpx;
		width: 100%;
		padding-bottom: 50px;

		view {
			font-size: 32rpx;
		}

		video {
			margin-top: 10rpx;
			width: 100%;
		}
	}
	.goodsCav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
