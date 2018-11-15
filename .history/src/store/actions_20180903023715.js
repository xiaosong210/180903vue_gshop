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
        const result = await reqAddress(geohash)
        //提交一个mutation
        if(result.code === 0){
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    async getCategorys({commit, state}){
        //发送异步ajax
        const result = await reqFoodCategorys()
        //提交一个mutation
        if(result.code === 0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    },
    async getShops({commit, state}){
        //发送异步ajax
        const 
        const result = await reqShops()
        //提交一个mutation
        if(result.code === 0){
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    }
 }