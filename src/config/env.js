// 获取图片地址
const imgurl = 'http://cangdu.org/files/images/'
let baseUrl
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8003'
} else {
  baseUrl = 'http://192.168.3.3:8003' // 手机端测试也可以使用了
}
export {
  baseUrl,
  imgurl
}
