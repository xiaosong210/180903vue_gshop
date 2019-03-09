/**
 *
 */
import ajax from './ajax'
// const BASE_URL = "http://loaclhost:4000"
const BASE_URL = '/api'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(`${BASE_URL}/index_category`)
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(`${BASE_URL}/shops`, {longitude, latitude})
// 根据经纬度和关键字搜索商铺列表
export const reqSearchShop = ({gerhash, keyword}) => ajax(`${BASE_URL}/search_shops`, {gerhash, keyword})
// 用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(`${BASE_URL}/login_pwd`, {name, pwd, captcha}, 'POST')
// 发送短信验证码
export const reqSendCode = ({phone}) => ajax(`${BASE_URL}/sendcode`, {phone})
// 手机验证码登录
export const reqSmsLogin = ({phone, code}) => ajax(`${BASE_URL}/login_sms`, {phone, code}, 'POST')
// 根据回话获取用户信息
export const reqUserInfo = () => ajax(`${BASE_URL}/userinfo`)
// 用户退出
export const reqLogout = () => ajax(`${BASE_URL}/logout`)
