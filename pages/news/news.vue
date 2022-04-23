<template>
	<view class="news">
		<news-list :data="newsList"></news-list>
	</view>
</template>

<script>
	import NewsList from '../../components/news-list/news-list.vue'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/home/catitems'
				})
				
				this.newsList = res.data.message
			}
		},
		components: {
			'news-list': NewsList
		},
		onLoad() {
			this.getNews()
		}
	}
</script>

<style lang="scss">
	.news {
		
	}
</style>
