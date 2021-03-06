// axios config
axios.defaults.baseURL='http://test-keepapi.kuaizaixuetang.com';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	console.log('before send');

	return config;
}, function (error) {
	// 对请求错误做些什么
	console.error('before send error');
	
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	console.log('got response');

	return response;
}, function (error) {
	// 对响应错误做点什么
	console.error('got response erroe');

	return Promise.reject(error);
});