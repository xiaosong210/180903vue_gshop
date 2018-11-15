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
    getAddress({commit})
 }