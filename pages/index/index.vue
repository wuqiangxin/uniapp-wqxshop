<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>

		<!-- 导航 -->
		<view class='nav'>
			<view class="nav-item" v-for="(item, index) in navs" :key="index" @click="navsItemClick(item.path)">
				<view :class="item.icons"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<!-- 一般用法 -->
			<goods-list @godetails="goGoodsDetail" :goods='goods'></goods-list>
		</view>
	</view>
</template>

<script>
	// 导入 goods-list 组件
	import goodsList from "../../components/goods-list/goods-list.vue"

	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [{
						icons: "iconfont icon-ziyuan",
						title: "黑马超市",
						path: "/pages/goods/goods"
					},
					{
						icons: "iconfont icon-guanyuwomen",
						title: "联系我们",
						path: "/pages/pics/pics"
					},
					{
						icons: "iconfont icon-tupian",
						title: "社区图片",
						path: "/pages/contact/contact"
					},
					{
						icons: "iconfont icon-shipin",
						title: "学习视频",
						path: "/pages/videos/videos"
					}
				]
			}
		},
		onLoad() {
			// 调用函数
			this.getSwipers()
			this.getHotGoods()
		},
		components: {
			'goods-list': goodsList
		},
		methods: {
			// 方式一
			// 获取 轮播图数据
			async getSwipers() {
				// 自己封装的api 发送请求获取数据
				const res = await this.$myRequest({
					method: 'GET',
					url: '/home/swiperdata'
				})
				// 接口有问题： 所以写的静态页面
				// console.log(res.data.message, '轮播图数据')
				this.swipers = res.data.message
			},
			// 获取 商品列表
			async getHotGoods() {
				const res = await this.$myRequest({
					url: '/home/floordata'
				})

				this.goods = [...res.data.message[1].product_list, ...res.data.message[0].product_list, ...res.data
					.message[2].product_list
				]
				// console.log(this.goods, 99)
			},
			// 导航跳转
			navsItemClick(url) {
				uni.navigateTo({
					url
				})
			},
			goGoodsDetail(item) {
				uni.navigateTo({
					url: '/pages/goodsDetails/goodsDetails'
				})
				
				console.log(item, 'item')
			}
		}
	}
</script>

<!-- 要先 安装 scss 插件 才能使用 lang="scss" -->
<style lang="scss">
	.home {

		// 轮播图
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		// 导航栏
		.nav {
			display: flex;

			.nav-item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				.icon-tupian {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		// 推荐商品
		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10px;

			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px; // 字与字之间的间距
				background: #fff;
				margin: 7rpx 0;
			}
		}
	}
</style>
