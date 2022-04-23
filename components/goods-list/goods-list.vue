<template>
	<!-- 商品 列表组件 -->
	<view class="goods_list">
		<view class="goods_item" @click="godetail(item)" v-for="(item, index) in goods" :key="index">
			<image :src="item.image_src">
			</image>
			<view class="price">
				<text>{{item.image_width}}</text>
				<text>{{item.image_width - 0 + 83}}</text>
			</view>
			<view class="name">{{item.name}}</view>
		</view>

	</view>
</template>

<script>
	export default {
		// 接收 属性参数
		props: ['goods'],
		methods: {
			godetail(item) {
				this.$emit('godetails', item)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		display: flex;
		padding: 0 15rpx;
		justify-content: space-between;
		overflow: hidden;
		flex-wrap: wrap;

		.goods_item {
			width: 355rpx;
			margin-bottom: 15rpx;
			background: #fff;
			padding: 10px;
			box-sizing: border-box;

			image {
				height: 150px;
				width: 100%;
				// 让图片居中
				display: block;
				margin: auto;
			}

			.price {
				font-size: 36rpx;
				color: $shop-color;
				padding: 8px 0;

				text:nth-child(2) {
					color: #ccc;
					text-decoration: line-through; // 将价格 划线
					margin-left: 17rpx;
					font-size: 28rpx;
				}
			}

			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
