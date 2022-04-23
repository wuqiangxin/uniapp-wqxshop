<template>
	<view>
		<view class="news-item" v-for="(item, index) in data" :key="index">
			<image class="image" :src="item.image_src">
			</image>
			<view class="content">
				<view class="tit">1季度多家房企利润跌幅超50% 去库存促销战打响----{{item.name}}</view>
				<view class="info">
					<text>发表时间：2019-03-15</text>
					<text>浏览：1次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['data']
	}
</script>

<style lang="scss">
	.news-item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;

		.image {
			width: 200rpx;
			height: 150rpx;
		}

		.content {
			padding: 5px 10px;
			position: relative;

			.tit {
				font-size: 30rpx;
			}

			.info {
				font-size: 26rpx;
				position: absolute;
				left: 10px;
				bottom: 5px;

				text:nth-child(2) {
					margin-left: 20px;
				}
			}
		}
	}
</style>
