/**
 * 通过mutations间接更新state的多个方法的对象
 */
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'
import { 
    reqAddress,
    reqFoodCategorys,
    reqShops
} from '../api'

 export default {
    // 异步获取数据
    async getAddress({commit, state}){
        //发送异步ajax
        const geohash = state.latitude + ',' + state.longitude
        const result = awreqAddress(geohash)
        //提交一个mutation
    }
 }