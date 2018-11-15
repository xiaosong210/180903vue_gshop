/**
 * 直接更新state的多个方法的对象
 */
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'

export default {
    [RECEIVE_ADDRESS](state, {address}){
        state.address = address
    },
    [RECEIVE_CATEGORYS](state, {address}){
        state.address = address
    },
    [RECEIVE_SHOPS](state, {address}){
        state.address = address
    }
}