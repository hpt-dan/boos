// export default{
// 	async getApi(query) {
// 		return await uni.request({
// 			url: `https://uniapp.dcloud.io/component/README?id=${query}`,
// 			method: 'GET'
// 		})
// 	}
// }
const baseUrl = 'http://192.168.254.110:10000'
export default{
	// ***
	// 登录接口
	async getApi(query) {
		return await uni.request({
			url: `${baseUrl}/api/oauth/anno/bossAssistantTest`,
			method: 'POST',
			data: query
		})
	}


}