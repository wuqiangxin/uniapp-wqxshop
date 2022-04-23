<template>
	<view class="goods_list">
		<!-- goods 属性传值 -->
		<goods-list :goods='goods'></goods-list>
		<view class="isOver" v-if="flag">--------我是有底线的--------</view>
	</view>
</template>

<script>
	// 导入 goods-list 组件
	import goodsList from "../../components/goods-list/goods-list.vue"

	export default {
		data() {
			return {
				goods: [],
				flag: true
			}
		},
		onLoad() {
			// 调用获取 商品列表数据函数
			this.getGoodsList()
		},
		components: {
			'goods-list': goodsList
		},
		methods: {
			async getGoodsList() {
				// 商品列表 数据
				const res = await this.$myRequest({
					url: '/home/floordata'
				})

				this.goods = [...res.data.message[1].product_list, ...res.data.message[0].product_list, ...res.data
					.message[2].product_list
				]
			}
		},
		// 上拉刷新、获取数据
		onReachBottom() {
			console.log('触底了')
		},
		// 下拉刷新、获取数据
		onPullDownRefresh() {
			console.log('下拉刷新')
			
			//  关闭 下拉刷新
			uni.stopPullDownRefresh()
		}
		
	}
</script>

<style lang="scss">
.goods_list {
	background-color: #eee;
}

.isOver {
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 18px;
}
</style>
