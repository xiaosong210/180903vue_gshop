/**
 * 
 */
import ajax from './ajax'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/40.10038,116.36`)