/**
    User模块接口裂变
 */
import base from './base';
import axios from '@/request/http'

const user = {
    login(params) {
        return axios.post(`${base.devUrl}/accesstoken`, params)
    }
}


export default user;