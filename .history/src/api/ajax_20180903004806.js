/**
 * ajax请求函数
 * 返回值：promise对象
 */
import axios from 'axios'

export default function ajax (url, data= {}, type= "GET") { 
    return new Promise(function(resolve, reject) {
        // 执行异步ajax请求
        let promise;
        if(type === 'GET'){
            let dataStr = ''//数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.sub
            }
        }
    })
 }