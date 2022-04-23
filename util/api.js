// 封装uniapp请求
// 1. 配置 默认请求路径
const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"

export const myRequest = (options)=>{
	// resolve 表示成功后执行的函数  reject 表示失败后执行的函数
	return new Promise((resolve,reject)=>{
		uni.request({
			method: options.method || 'GET',
			data: options.data || {},
			url: baseUrl+options.url,
			success(res) {
				if(res.data.meta.status !== 200) {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resolve(res)
			},
			fail(err) {
				uni.showToast({
					title: '发送请求失败'
				})
				reject(err)
			}
		})
	})
}