/**
 * 
 */
import ajax from './ajax'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodTypes = () => ajax(`/index_category/${geohash}`)
// 3、根据经纬度获取商铺列表
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)