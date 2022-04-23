<template>
	<view class="pics">
		<!-- 左侧 商品列表区域 -->
		<scroll-view class="left" scroll-y>
			<view 
			@click="activeColor(index)"
			:class="active === index ? 'active' : ''" 
			v-for="(item, index) in cates" 
			:key="index">
				{{item.cat_name}}
			</view>
		</scroll-view>

		<!-- 右侧图片显示区域 -->
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="(item, index) in secondPhone" :key="index">
				<image @click="phonePriview(item.image_src)" :src="item.image_src"></image>
				<text>{{item.name}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				secondPhone: []
			}
		},
		methods: {
			async getCates() {
				const res = await this.$myRequest({
					url: '/categories'
				})

				this.cates = res.data.message
				
				// 默认 进入页面就获取图片信息
				this.activeColor(0)
			},
			// 点击切换高亮显示
			async activeColor(index) {
				this.active = index
				// 获取 右侧图片信息
				// 商品列表 数据
				const res = await this.$myRequest({
					url: '/home/floordata'
				})
				
				this.secondPhone = [...res.data.message[1].product_list, ...res.data.message[0].product_list, ...res.data
					.message[2].product_list
				]
			},
			// 图片预览
			phonePriview(current) {
				const urls = this.secondPhone.map(item => {
					return item.image_src
				})
				
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad() {
			this.getCates()
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			.active {
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;
			.item {
				image {
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
